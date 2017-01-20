import MyDiv from 'myDiv';
console.log('xxxxx');

let sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    })
}

const b = async function(abc) {
    console.time(abc);
    await sleep();
    console.timeEnd(abc);
}

b('test2');

Vue.component('my-div', MyDiv);
new Vue({
    el: '#app',
})

console.log(MY_NAME);
