function flatten(arr) {
    let myArr = arr.reduce(function(flat, curr) {
        return flat.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
    return myArr;
}

console.log(flatten([
    [
        [1, 2, 3]
    ],
    [
        [
            [
                [4, 5]
            ]
        ]
    ]
]));