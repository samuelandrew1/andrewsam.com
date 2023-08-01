import { useState } from "react"
import ExpenseTable from "./ExpenseTable"
import tableObject from "./TableObject"


const ExpenseApp = () => {
    const [table, setTable] = useState(tableObject)
    return (
        <ExpenseTable tableDatas={table} />
    )
}
export default ExpenseApp