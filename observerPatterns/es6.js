class EventObserver {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are now subscribe to ${fn.name}`);
    }

    unsubscribe(fn){
        //Filter uot from the list whatever matches the callback
        //function. If there is no mutch, the callback gets to stay
        //on the list. The filter return a new list and reassigns
        //the list of observers.
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are unsubscribe from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click = new EventObserver();

//event listener
document.querySelector('.sub-ms').addEventListener('click',
    function () {
        click.subscribe(getCurMilliseconds);
    });

document.querySelector('.unsub-ms').addEventListener('click',
    function () {
        click.unsubscribe(getCurMilliseconds);
    });

document.querySelector('.sub-sec').addEventListener('click',
    function () {
        click.subscribe(getCurSeconds);
    });

document.querySelector('.unsub-sec').addEventListener('click',
    function () {
        click.unsubscribe(getCurSeconds);
    });

document.querySelector('.fire').addEventListener('click',
    function () {
        click.fire();
    });
//click handler
const getCurMilliseconds = function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
