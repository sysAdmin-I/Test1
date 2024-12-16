// 1

const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// 2

// console.log("Прошла секунда"); // 1
// console.log("Прошла секунда"); // 2
// console.log("Прошла секунда"); // 3

const intervalSeconds = () => {
    setInterval(() => {
        console.log("Прошла секунда")
    }, 1000)

}

intervalSeconds();

// 3

const count = () => {
    let i = 1;

    const interval = setInterval(()=> {

        console.log(i)
        if (i === 10) {
            clearInterval(interval);
        }
        i++
    }, 1000)
}

count()

// 4

const block = document.querySelector(".block");


block.addEventListener('click', () => {
 block.classList.toggle('block-active');
});

// 5

const request = new XMLHttpRequest();
request.open('GET', 'any.json', );
request.send();


request.onload = () => {
    let data = JSON.parse(request.response);
    console.log(data);
};

