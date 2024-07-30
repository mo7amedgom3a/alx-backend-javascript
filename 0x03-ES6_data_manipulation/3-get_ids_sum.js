export default function getStudentIdsSum(array) {
    if (!Array.isArray(array)){
        return 0;
    }
    return array.reduce((acc, x) => acc + x.id, 0);
}
