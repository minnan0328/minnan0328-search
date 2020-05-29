//index.js
import axios from 'axios'
const ArrRes = [
  'str',{ a: 2, b: 3, c: 5 },
  [{ b: 6, f: true, t: 'str' }, 'TestArray', 123456],
  20,true
]

const sum = ((a, b) => {
  return a + b;
})

const FilterShowData = (num) => {return ArrRes[num]}

let ErrorFn = (count) => {
  if (count === 0) {
    throw 'count error'
  }
}

let isTest = false
let count = 0

let TestBranch = () => {
  if (!isTest){
    count = count + 1
  }else{
    count = count - 1
  }
  switch (count){
    case 1:
      break
    case 2:
      break
    case 3:
      break
    default:
      isTest = true
      break
  }
}

const DataState = {
  _volume: false,
  get getState() { return this._volume},
  set setState(value){ this._volume = value}
}

const getArrayData = () => {
  return axios.get('./../../static/data/TestData.json').then((response) => {
    return response
  }).catch(error => console.log(error))
}
let numbers = [1, 2, 3, 4, 5]

const CheckNumber = (num) => {
  if ((num % 2) === 0 ) return true
  else return false
}

const Calculation = (numbers, checkNumber) => {
  let count = 0
  numbers.forEach((num) => {
    if (checkNumber(num)) count += num
  })
  return count
}

// Calculation(numbers, Check.checkNumber)


const checkState = () => {
  return true
}


export default {
  sum, FilterShowData, ErrorFn, TestBranch, DataState, getArrayData, CheckNumber, Calculation, checkState
}