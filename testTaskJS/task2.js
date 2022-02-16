let arr = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

// Point 2.1 with Simple Quicksort

function quicksort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivotIndex = Math.floor(Math.random()*arr.length);
    let pivot = arr[pivotIndex];

    let more = [];
    let less = [];

    for (let i = 0; i < arr.length; i++) {
        if (pivotIndex === i) {continue;}

        if (arr[i] > pivot){
            more.push(arr[i]);
        } else {
            less.push(arr[i]);
        }

    }
    return [...quicksort(less), pivot, ...quicksort(more)];
}

document.getElementById("btn21").onclick = function () {
    document.getElementById("result21").innerHTML = quicksort(arr);

}

// Point 2.2 with Sort()

let sortedArr22 = arr.sort((a, b) => b - a );

document.getElementById("btn22").onclick = function () {
    document.getElementById("result22").innerHTML = sortedArr22;
}

// Point 2.3 with Insertion sort

let arr23 = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

function insertionSort(arr) {
    let arrSorted = [];

    for (let i = 0; i < arr.length; i++) {
        let j = i, tmp;
        arrSorted.push(arr[i]);
        while (j > 0 && arrSorted[j - 1] > arrSorted[j]) {
            tmp = arrSorted[j - 1];
            arrSorted[j - 1] = arrSorted[j];
            arrSorted[j]= tmp;
            j--;
        }
    }
    return Array.from(new Set(arrSorted));

}

document.getElementById("btn23").onclick = function () {
    document.getElementById("result23").innerHTML = insertionSort(arr23);
}

function insertionSortDown(arr) {
    let arrSortedDown = [];

    for (let i = 0; i < arr.length; i++) {
        let j = i, tmp;
        arrSortedDown.push(arr[i]);
        while (j > 0 && arrSortedDown[j - 1] < arrSortedDown[j]) {
            tmp = arrSortedDown[j];
            arrSortedDown[j] = arrSortedDown[j - 1];
            arrSortedDown[j - 1]= tmp;
            j--;
        }
    }
    return arrSortedDown.filter((item,index) => arrSortedDown.indexOf(item) === index);

}

document.getElementById("btn24").onclick = function () {
    document.getElementById("result24").innerHTML = insertionSortDown(arr23);
}

// Point 2.4

let min = arr23[0];
let max = min;
for (let i = 1; i < arr23.length; ++i) {
    if (arr23[i] > max) max = arr23[i];
    if (arr23[i] < min) min = arr23[i];
}

document.getElementById("btn25").onclick = function () {
    document.getElementById("result25").innerHTML = min;
}

document.getElementById("btn26").onclick = function () {
    document.getElementById("result26").innerHTML = max;
}

// Point 2.4 with functions

let min1 = Math.min.apply(null, arr23),
    max1 = Math.max.apply(null, arr23);

/*
console.log(min1);
console.log(max1);*/
