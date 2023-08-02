import { useState } from "react"
import ExpenseTable from "./ExpenseTable"
import tableObject from "./TableObject"


const ExpenseApp = () => {
    const [table, setTable] = useState(tableObject)
    // const [lock, setLock] = useState(true)
    // delete data in the table
    const lock = true
    const handleDelete = (id: number) => {
        setTable(table.filter((e) => e.id !== id))
    }
    const handleLock = () => {
        setLock(false);
    }

    return (
        <ExpenseTable lock={lock}
            tableDatas={table}
            onDelete={handleDelete}
            onLock={handleLock}
        />
    )
}
export default ExpenseApp