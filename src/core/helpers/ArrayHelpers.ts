/** Разбить массив на подмассивы с из n-элементов */
export function chunkArray<T>(arr: T[], chunkSize: number = 2): T[][] {
    var result = arr.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize)
        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }
        resultArray[chunkIndex].push(item)
        return resultArray
    }, [])
    return result
}
