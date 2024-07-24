export default function iterateThroughObject(reportWithIterator) {
    let str = '';
    for (const [index, item] of reportWithIterator.entries()) {
        if (index === reportWithIterator.length - 1) {
            str += item;
        }
        else {
            str += `${item} | `;
        }
    }
    return str;
}
