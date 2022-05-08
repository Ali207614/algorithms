
// https://edabit.com/challenge/3fS4DBuMZYch3sn7Q
// https://edabit.com/challenge/2nLTDz2yk4vW8Cnwv
// https://edabit.com/challenge/x2LS9YvyK38uH8B7J
// https://edabit.com/challenge/5S5HBQW6zZp8eH3eL



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// https://edabit.com/challenge/t6HFLEYD2e7ePxAu5


// function missingLetter(str) {
//     let arr = []
//       for(let i = 0;i<str.length;i++){
//       arr.push(str.charCodeAt(i))
//     }
//     for(let i = arr[0];i<arr[arr.length-1];i++){
//         if(!arr.includes(i)){
//           return String.fromCharCode(i)
//         }
//     }
//     return "No Missing Letter"
//   }
//   console.log(missingLetter("abdefg"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/Bd2jQS9xA6QecB34h


// function mapLetters(word) {
// 	let obj = {}
//     for(let i =0;i<word.length;i++){
//         if(obj[word[i]]){
//             obj[word[i]].push(i)
//         }
//         else{
//             obj[word[i]] = [i]
//         }
//     }
//     return obj
// }

// console.log(mapLetters("froggy") )



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/xt4CMLpfFRuDTsJgC




// function toCamelCase(str) {
//     str = str.split('')
//     let arr = ['_','-']
//     for(let i = 0;i<str.length;i++){
//         if(arr.includes(str[i])){
//             str[i] = ''
//             str[i+1] = str[i+1].toUpperCase()

//         }
//         else{
//         }
//     }
//     return str.join('')
// }

// console.log(toCamelCase("the-stealth-warrior"))




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/ztJZiCZeXATC9KDHX



// function duplicate(str){
//     return [...new Set(str.toLowerCase().split(''))].length == str.length
// }

// function noDuplicateLetters(phrase) {
//     let arr = []
//     phrase = phrase.split(' ')
// 	for(let i of phrase){
//         if(duplicate(i)){
//             arr.push(i)
//         }
//     }
//     return phrase.length == arr.length    
// } 
// console.log(noDuplicateLetters("Look before you leap.") )



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/CKEAH6cs5Tt7aKXKv


// function check(str){
//   str = str.split('').filter(item => item !== ' ').join('')
//   for(let i = 0;i<str.length;i++){
//       if(str[i] == '*'){
//             if(str[i+1] !== undefined && str[i-1] !== undefined){
//                 return true
//             }
//       }
//   }
//   return false
// }

// function inBox(arr) {
//     let newArr = []
// 	for(let i of arr){
//         newArr.push(check(i))
//     }
//     return newArr.includes(true)
// }
// console.log(inBox([
//     "## #",
//     "*##",
//     "###"
//   ]))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk


// function sumDigProd(...arg) {
//     let n = arg.reduce((a,b) => a+b)
//    while ( n.toString().length > 1) {
//        n = n.toString().split('').reduce((a,b) => a * b)
//    }
//    return n
// }

// console.log(sumDigProd(8, 16, 89, 3))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/8QTBwLzAdaM8wkrXu

// function func(a){
//     let sum = 0
//     for(let i = 0;i<a.length;i++){
//         sum += (a[i].charCodeAt() - 96)
//     }
//     return sum
// }
// function balanced(word) {
//     let left = []
//     let right = []
//     let len = parseInt(word.length / 2)
//     let son = word.length % 2 == 0 ? 0 : 1
// 		for(let i =0;i<len;i++){
//         left.push(word[i])
//         right.push(word[i + len + son])
//     }
//     return func(left) == func(right)
// }   

// console.log(balanced("zips"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/TZR9EM6xcJrer4Naq


// function isNum(a){
//     let reg = /([0-9])+/g
//     return a.match(reg).join('')
// }

// function rearrange(sentence) {
//     return sentence.trim().split(' ').sort((a,b) => isNum(a) - isNum(b)).map(item => item.replace( /[0-9]/g, '')).join(' ')
// }

// console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/2FBEMqxiZ2z9efgQB


// function firstNVowels(s, n) {
// 	let arr  = ['a', 'e', 'i', 'o', 'u']
//     let newArr = s.split('').filter(item =>  arr.includes(item))
//     return newArr.length >= n ? newArr.slice(0,n).join('') : 'invalid'
// }
// console.log(firstNVowels("hostess", 5) )



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/LoBo2DoWQuuzSr6Ft


// function threeLetterCollection(s) {
//     let arr = []
// 	for(let i = 0;i<s.length;i++){
//         arr.push(s.slice(i,3+i))
//     }
//     return arr.filter(item => item.length == 3).sort()
// }
// console.log(threeLetterCollection("edabit"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/R3649PDvoFf6wGxyg


// function getMiddle(str) {
// 	let len = str.length / 2
// 	return str.length % 2 == 0 ? str.slice(len-1,len+1) : str.slice(len,len+1)
// }

// console.log(getMiddle("middle"))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/xuRjEej9F9ZG3vg7M

// function vowel(str){
// 	let arr = ['a','e','i','o','u']
//     return arr.findIndex(item => item == str)+1
// }

// function replaceVowel(word) {
// 	let arr = ['a','e','i','o','u']
//     let str = ''
//     for(let i = 0;i<word.length;i++){
//         if(arr.includes(word[i])){
//             str+=vowel(word[i])
//         }
//         else{
//             str+=word[i]
//         }
//     }
//     return str
// }
// console.log(replaceVowel("karachi"))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/8a2J9T4FM5fgSwn4w

// function sumMissingNumbers(arr) {
//     let newArr = []
// 	for(let i = Math.min(...arr) ;i<Math.max(...arr);i++){
//         if(!arr.includes(i)){
//             newArr.push(i)
//         }
//     }
//     return newArr.length ? newArr.reduce((a,b) => a+b) : 0
// }
// console.log(sumMissingNumbers([1, 2,3,4,5])) 



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// https://edabit.com/challenge/kDKgBie4ktG2Qf8R3


// function maxConsec(arr) {
//     let lastArr = []
//     arr = [...new Set(arr.sort((a,b) => a-b))]
//     let newArr = []
//     for(let i = 0;i<arr.length;i++){
//       if(arr[i]+1 == arr[i+1]){
//           newArr.push(arr[i])
//         }
//         else{
//             newArr.push(arr[i])
//             lastArr.push(newArr)
//             newArr = []
//         }
//    }
//    return lastArr.sort((a,b) => b.length - a.length)[0].length
// }
// console.log(maxConsec([4, 9, 10, 5, 17, 3, 8, 11, 1, 12, 18, 20]))

// console.log(maxConsec([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// https://edabit.com/challenge/ABiF6EsqRYMvogcgp

// function getHashTags(str) {
// 	return str.toLowerCase().split(' ').sort((a,b) => b.length - a.length).slice(0,3).map(item => '#'+item.match(/()\w+/g))
// }
// console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// https://edabit.com/challenge/jbR9NupEL8zAZkbKx

// function matchLastItem(arr) {
// 	return arr.slice(0,arr.length-1).reduce((a,b) => a.toString() + b.toString()) == arr[arr.length-1]
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))




//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/nLRGjd2LeAECKykZz



// function replace(arr){
//     return arr.map(item => item.split('').reverse().join('')).join('').split('').map(item => item == item.toUpperCase() ? ' '+item : item).join('').trim()
// }
// function recompose(string) {
// 	let vowel = ['a','i','o','e','u']
//     vowel.includes(string[string.length-1]) ? string+='d' : string+='a'
//     let arr = []
//     let ud = ''
//     let uk =''
//     for(let i = 0;i<string.length;i++){

//         if(vowel.includes(string[i]) || vowel.includes(string[i].toLowerCase())){
//             ud+=string[i]
//             if(uk.length){
//                 arr.push(uk)
//                 uk = ''
//             }
//         }
//         else{
//             uk+=string[i]
//             if(ud.length){
//                 arr.push(ud)
//                 ud=''
//             }
//         }
//     }
//     return replace(arr)
// }


// function recompose(string) {
// 	return string
// 		.match(/[aeiou]+|[^aeiou]+/gi)
		// .map(e => [...e].reverse().join(''))
		// .join('')
		// .match(/[A-Z][a-z]*/g)
		// .join(' ');
// }

// console.log(recompose("BaosdrOCfanada"))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// https://edabit.com/challenge/bZJLPjJL4BuyeeB6j


// function camelCasing(str) {
//     str = str.split('')
//   let arr = [' ','_']
//   let newArr = []
//   for(let i = 0;i<str.length;i++){
//       if(arr.includes(str[i])){
//           str.splice(i,1)
//           newArr.push(str[i].toUpperCase())
//       }
//       else{
//           newArr.push(str[i].toLowerCase())
//       }
//   }
//   return newArr.join('')[0].toLowerCase() + newArr.join('').slice(1)
// }
// console.log(camelCasing("Hello World"))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\




// https://edabit.com/challenge/3mKNTsZ5f7b9hHTky

// function transposeMatrix(mtx) {
// 	let arr = []
//     for(let i = 0;i<mtx.length;i++){
//         for(let j = 0;j<mtx.length;j++){
//             arr.push(mtx[j][i])
//         }
//     }
//     return arr.join(' ').trim()
// }
// console.log(transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."]
//   ]))

//   console.log(transposeMatrix([
//     ["Enter"],
//     ["the"],
//     ["Matrix!"]
//   ]) )

//   console.log(transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."]
//   ]))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/5S5HBQW6zZp8eH3eL

// function uncensor(str, vowels) {
//     let newStr =''
//     let ind = 0
// 	for(let i = 0;i<str.length;i++){
//         if(str[i] == '*'){
//             newStr+=vowels[ind]
//             ind+=1
//         }
//         else{
//             newStr+=str[i]
//         }
//     }
//     return newStr
// }

// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") )


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/D7wauJQRRCnCqroEZ


// function splitAndDelimit(str, num, del) {
//     let arr = []
//     let n = 0
// 	for(let i = 0;i<str.length;i+=num){
//         arr.push(str.slice(i,num+i))
//     }   
//     return arr[0]+arr.slice(1).map(item => del+item).join('')
// }
// console.log(splitAndDelimit("bellow", 2, "&") )


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/62BAcgsNSdwYmE9ty

// function nearestVowel(s) {
//     let a = ['a','o','u','e','i']
//     a =a.map(item => item.charCodeAt()).sort((a,b) => a-b)
// 	let vowel = a.map(item => Math.abs(item-s.charCodeAt()))
//     let f = vowel.findIndex(item => item == Math.min(...vowel))
//     return String.fromCharCode(a[f])
// }
// console.log(nearestVowel("b"))
// console.log(nearestVowel('g'))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// connect
// https://edabit.com/challenge/J6ZGG6AvXQzqRpRsy

// function func(a,b){
//     let arr = []
// 	for(let i=0;i<a.length;i++){
// 		if(b.includes(a.slice(i))){
// 			let d =  b.replace(a.slice(i),'')
// 			arr.push(d)
// 			return arr
// 		}
// 	}
// 	return 0
// }
// function join(arr) {
//     let a = []
// 	for(let i = 0;i<arr.length;i++){
//         if(arr[i+1]){
//             if(!func(arr[i],arr[i+1])){
//                 return [arr.join(''),0]
//             }
//             else{
//                 a.push(...func(arr[i],arr[i+1]))
//             }
//         }
//     }
//     return [arr[0]+a.join(''),Math.min(...arr.slice(1).map((item,index) => item.length - a[index].length))]
// }


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/inecXu7CtXyvNekxu


// function staircase(n) {
// 	let str = ''
// 	for(let i = 1;i<=Math.abs(n);i++){
//         if(n>0){
//             str+= ('_'.repeat(n-i)+'#'.repeat(i)+'\n')
//         }
//         else{
//             str+= ('_'.repeat(i-1)+'#'.repeat((-1*n)-i+1)+'\n')
//         }
//     }
//        return str.slice(0,str.length-1)
// }


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/Zf5a8fNYZ6hPJeXE4

// ishlash garak

// function convertFunctions(fn) {
// 	let str = ""
// 	if(fn.split(' ')[0] == 'function'){
// 		let name = fn.match(/([a-zA-Z_{1}][a-zA-Z0-9_]+),/g)
// 		if(name){
// 			fn = fn.replace('function','const')
// 		}
// 		else{
// 			fn = fn.replace('function','')
// 		}
// 		fn.replace()
// 	}
// 	console.log(fn)
// }

// console.log(convertFunctions("function nima(str) { console.('nima') }"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/eARWGdpymGeNQiHBi


// function getObject(args) {
// 	let arr = Object.values(args).sort((a,b) => b.age - a.age)
// 	let newArr = [...new Set(arr.map(item => item.marks))]
// 	let ar = []
// 	for(let i  = 0;i<newArr.length;i++){
// 		ar.push([i,arr.find(item => item.marks == newArr[i])])
// 	}
// 	return Object.fromEntries(ar)		
// }

// console.log(getObject({
// 	"0": { age: 18, name: "john", marks: "400" },
// 	"1": { age: 17, name: "julie", marks: "400" },
// 	"2": { age: 16, name: "Robin", marks: "200" },
// 	"3": { age: 16, name: "Bella", marks: "300" }
//   }) )



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/JgjQDgNp4nQuMv2LA

// function whoWon(board) {
//     for(let i = 0;i<board.length;i++){
//         let arr = []
//         for(let j = 0;j<board[i].length;j++){
//             arr.push(board[j][i])
//         }
//          if(arr.every(el => el == arr[0])){
//              return arr[0]
//          }
//     }
//     let newArr1 = []
//   for(let i = 0;i<board.length;i++){
//       if(board[i].every(item => item == board[i][0])){
//            newArr1.push(board[i][0])
//       }
//   }
//   if(newArr1.length == 1){
//       return newArr1[0]
//   }
//     let newArr = new Set()
//     let newArr2 = new Set()
//     for(let i = 0;i<board.length;i++){
//         newArr.add(board[i][i])
//         newArr2.add(board[i].reverse()[i])
//     }
//     if(newArr.size == 1){
//         return [...newArr][0]
//     }
//     else if(newArr2.size == 1){
//         return [...newArr2][0]
//     }
//     else{
//         return "Tie"
//     }
// }

// console.log(whoWon([
//     ["X", "X", "O"],
//     ["X", "O", "O"],
//     ["X", "X", "X"]
//   ]) )


// console.log( whoWon([
//     ["O", "O", "X"],
//     ["X", "X", "X"],
//     ["O", "O", "O"]
//   ]))
// console.log(
//   whoWon([
//     ["O", "O", "X"],
//     ["X", "O", "X"],
//     ["O", "X", "O"]
//   ]) 
//  )


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/KLyD6Ce6KkA2364sH


// function equalCount (str, names) {
// 	let newArr = str.match(/\w+/g)
//     names= names.split('&')
//     let obj = {}
//     obj[names[0]] = newArr.filter(item => item == names[0]).length
//     obj[names[1]] = newArr.filter(item => item == names[1]).length
//     let n = newArr.filter(item => item == names[0]).length == newArr.filter(item => item == names[1]).length
//     obj['equality'] = n
//     if(!n){
//         obj['difference'] = Math.abs(newArr.filter(item => item == names[0]).length - newArr.filter(item => item == names[1]).length)
//     }
//     return obj
// }

// console.log(equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul"))

// console.log(equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom"))



//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// https://edabit.com/challenge/zadc59oCm9Hj5xnrh


// function isPalindrom(str){
//     return str.split('').reverse().join('') == str
// }

// function minPalindromeSteps(str) {
// 	  if(isPalindrom(str)){
//         return 0
//     }
// 	for(let i = 0;i<str.length;i++){
//         if(isPalindrom(str+str.slice(0,i+1).split('').reverse().join(''))){
//             return i+1
//         }
//     }
// }


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/TyN8D68zYSg75i5gD

// function factor(num){
//     let count = 0
//     for(let i = 1;i<=num;i++){
//         if(num % i == 0){
//             count+=1
//         }
//     }
//     return count
// }

// function factorSort(nums) {
// 	return nums.sort((a,b) => b-a).sort((a,b) => factor(b) - factor(a))
// }


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// https://edabit.com/challenge/mH6Ny8eH6AStdzzyS

// function wordX(str){
//     let vowel = ['a','i','o','u','e']
//     let newStr = ''
//     for(let i = 0;i<str.length;i++){
//         if(str[i] == 'x'){
//             if(i == 0 && str[i+1]){
//                 newStr+='z'
//             }
//             else{
//                 if(vowel.includes(str[i-1])){
//                     newStr+= 'cks'
//                 }
//                 else{
//                     newStr+='ecks'
//                 }
//             }
//         }
//         else{
//             newStr+=str[i]
//         }
//     }
//     return newStr
// }

// function xPronounce(sentence) {
// 	sentence = sentence.split(' ')
//     return sentence.map(item => wordX(item)).join(' ')
// }

// console.log(xPronounce("Inside the box was a xylophone"))


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
