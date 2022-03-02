// 8 JS ARray Methods
const items = [
    {name:'Bike', price:'100'},
    {name:'Tv', price:'200'},
    {name:'Album', price:'10'},
    {name:'Book', price:'5'},
    {name:'Phone', price:'500'},
    {name:'Computer', price:'1000'},
    {name:'Keyboard', price:'25'}
]

// create new Array with the condition
const filterItems = items.filter((item) => {
    // ture & false elements
    return item.price <= 100
})

// create new Array with only price 
const itemNames = items.map((item) => {
    return item.price
})

// create new Array with all elements include the key 
const foundItem = items.find((item) => {
    return item.name === 'Album'
})

// for loop:return all the key 
items.forEach((item) => {
    console.log(item.name)
})

// check true and false and return, check include or not
const hasInexpensiveItems1 = items.some((item) => {
    return item.price <= 100
})

// check the item, true and false, check include or not
const hasInexpensiveItems2 = items.every((item) => {
    return item.price <= 100
}, 0)

// forloop: item and property(Need more parameter!) add total variable
const total =  items.reduce((item, currentTotal) => {
    return item.price + currentTotal
})

// check Array & return true & False
const nums = [1,2,3,4,5]
const includeTwo =  nums.includes(2) 
    console.log(includeTwo)

console.log(filterItems)
console.log(itemNames)
console.log(hasInexpensiveItems1)
console.log(hasInexpensiveItems2)
console.log(total)