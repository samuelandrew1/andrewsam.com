export interface tableProps {
    date: string,
    id: number,
    amount: number,
    category: string,
    Description: string

}

const tableObject: tableProps[] = [
    {
        date: "1/8/2023",
        id: 1,
        amount: 200,
        category: "food items",
        Description: "a bag of rice",
    },
    {
        date: "2/8/2023",
        id: 2,
        amount: 200,
        category: "food items",
        Description: "a bag of beans",
    }
]
export default tableObject

