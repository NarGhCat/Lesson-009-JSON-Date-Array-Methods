function sortBy(arr, str) {
    switch (str) {
        case "Asc":
            arr.sort(function(a, b) {
                return a - b;
            });
            console.log(arr);
            break;

        case "Desc": 
            arr.sort(function(a, b) {
                return b - a;
            });
            console.log(arr);
    }
}
sortBy([4, 3, 2, 1], "Asc");
sortBy([10, 14, 5, 23, 55], "Desc");