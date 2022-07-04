function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function monkey() {
        return "I am a monkey.";
    }
}

function returnsAnAnonymousFunction() {
    return function () {console.log("I am anonymous.")};
}