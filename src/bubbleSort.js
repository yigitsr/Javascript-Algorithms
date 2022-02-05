function bubbleSort(arr) {

    var i, j;
    var length = arr.length;

    var isSwapped = false;

    for (i = 0; i < length; i++) {

        isSwapped = false;

        for (j = 0; j < length; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        if (!isSwapped) {
            break;
        }
    }

    console.log(arr)
}

var arr = [1, 5, 4, 2, 3, 96, 78, 45, 36, 258, 745, 1995, 48, 35, 2001, 167, 24, 6, 8, 1968, 44, ];

bubbleSort(arr)