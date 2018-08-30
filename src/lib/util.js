export default {
    pluck_arr(arr, key) {
        const result = [];
        if(arr) {
                arr.forEach(obj => {
                result.push(obj[key]);
            });
        }
        return result;
    },
}