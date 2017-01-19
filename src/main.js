import 'babel-polyfill';

console.log('xxxxx');

let sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    });
}

const b = async function(abc) {
    console.time(abc);
    await sleep();
    console.timeEnd(abc);
}

b('test2');
