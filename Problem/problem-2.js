
/*Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends*/

/*b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.*/

const friends = ['Shuvo', 'Ariful', 'Ovi', 'Lemon', 'Nomita', 'Sobuj'];
const otherArrowFunction = friendList => {
    const newArray = [];
    for(i = 0; i < friendList.length; i++){
        if(friendList[i].length % 2 == 0){
            newArray.push(friendList[i]);
        }
    }
    return newArray;
}
const result = otherArrowFunction(friends);
console.log(result);