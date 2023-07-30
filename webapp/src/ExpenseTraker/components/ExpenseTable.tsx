import { Table, TableCaption, TableContainer, Th, Thead, Tr } from "@chakra-ui/react"

const ExpenseTable = () => {
    return (
        <TableContainer>
            <Table>
                <TableCaption>Expense Tracker</TableCaption>
                <Thead>
                    <Tr>
                        <Th>date</Th>
                        <Th>item Description</Th>
                        <Th>category</Th>

                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
    )
}
export default ExpenseTable