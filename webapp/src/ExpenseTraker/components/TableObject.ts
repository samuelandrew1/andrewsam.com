export interface tableProps {
    date: string,
    id: number,
    amount: number,
    category: string,
    itemDescription: string
    serialNo: number

}

const tableObject: tableProps[] = [
    {
        date: "1/8/2023",
        id: 1,
        amount: 200,
        category: "food items",
        itemDescription: "a bag of rice",
        serialNo: 1
    },
    {
        date: "2/8/2023",
        id: 2,
        amount: 200,
        category: "food items",
        itemDescription: "a bag of beans",
        serialNo: 2
    }
]
export default tableObject