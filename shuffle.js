//let friendArray = friends.json;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayShuffle = function(arr) {
    let newPosition,
        tempPosition;
    
        for (let i = arr.length - 1; i > 0; i--) {
            newPosition = Math.floor(Math.random() * (i + 1));
            tempPosition = arr[i];
            arr[i] = arr[newPosition];
            arr[newPosition] = tempPosition;
        }

        return arr;
};

let newArray = arrayShuffle(array);
console.log(newArray);