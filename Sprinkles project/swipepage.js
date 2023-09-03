let txtEl = document.getElementById('txt')

let arr1 = ['Harry', 'Kevin', 'Sam', 'Donald', 'John', 'Larry', 'Peter', 'Ryan', 'Tom', 'Vlad']
let arr2 = [`<img src="img/harry.jpeg" alt="" id="imagep">`, `<img src="img/kevin.jpeg" alt="" id="imagep">`, `<img src="img/sam.jpeg" alt="" id="imagep">`, `<img src="img/donald.jpeg" alt="" id="imagep">`, `<img src="img/john.jpeg" alt="" id="imagep">`, `<img src="img/larry.jpeg" alt="" id="imagep">`, `<img src="img/peter.jpeg" alt="" id="imagep">`, `<img src="img/ryan.jpeg" alt="" id="imagep">`, `<img src="img/tom.jpeg" alt="" id="imagep">`, `<img src="img/vlad.jpeg" alt="" id="imagep">`]


imEl = document.getElementById('imgdiv')

let k = 0
function swipe(){
    txtEl.innerText = arr1[k]
    imEl.innerHTML = arr2[k]
    k += 1
    if (k == 10) {
        k = 0
    }
}