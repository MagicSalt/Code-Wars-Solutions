function findAverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
    }
    if ((average /= array.length)) {
        return average;
    } else {
        return 0;
    }
}
