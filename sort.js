function sortBy(arr, str) {
    switch (str) {
    case "Asc" 
        arr.sort(function(a, b) {
            return a - b;
        });
        console.log(arr);
        
    break;

    case "Desc" 
    arr.sort(function(a, b) {
        return b - a;
      });
      console.log(arr);
    }
}
sortBy([4, 3, 2, 1], "Asc");