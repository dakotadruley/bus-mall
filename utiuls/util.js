export default function findById(id, array) {
    let result = null;

    array.forEach(arrayItem => {
        if (id === arrayItem.id) {
            result = arrayItem; } 
    });
    return result;
}