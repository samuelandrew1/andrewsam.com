import { Button, HStack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { tableProps } from "./TableObject"
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FaUnlockAlt, FaLock } from 'react-icons/fa'
import { useState } from "react"
import { Alert } from "@chakra-ui/react"
interface itemProps {
    tableDatas: tableProps[]
}

const ExpenseTable = ({ tableDatas }: itemProps) => {
    const [lock, setLock] = useState(true)
    const [popAlert, setPopAlert] = useState(false)
    const tableHeader = [
        'S/No.', 'Date', 'amount', 'category', 'item description', 'Action'
    ]
    return (
        <>
            <TableContainer
                m={["auto",]}
                p={5}
                w={{ base: "95%", lg: "80%" }}
                bg={"black"}>
                <Table variant={"striped"} colorScheme='black'>
                <TableCaption>Expense Tracker</TableCaption>
                <Thead>
                    <Tr>
                            {tableHeader.map(thead =>
                                <Th scope="col"
                                    key={thead} color={"white"}
                                >
                                    {thead}
                                </Th>
                            )}

                    </Tr>
                </Thead>
                    <Tbody>
                        {tableDatas.map(items =>
                            <Tr key={items.id}>
                                <Td scope="row" color={"whiteAlpha.800"}>{items.serialNo}</Td>
                                <Td scope="row" color={"whiteAlpha.800"} >{items.date}</Td>
                                <Td scope="row" color={"whiteAlpha.800"}>{items.amount}</Td>
                                <Td scope="row" color={"whiteAlpha.800"}>{items.category}</Td>
                                <Td scope="row" color={"whiteAlpha.800"}>{items.itemDescription}</Td>
                                <Td>
                                    <HStack>
                                        <Button colorScheme='red' leftIcon={<RiDeleteBin6Fill />}>delete</Button>
                                        {lock && <Button colorScheme='blue' leftIcon={<FaUnlockAlt />}
                                            onClick={() => {
                                                setLock(false)
                                            }}>lock</Button>}
                                        {!lock && <Button colorScheme='blue' leftIcon={<FaLock />} onClick={() => setLock(true)}>locked</Button>}
                                    </HStack>
                                </Td>
                            </Tr>)}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td color={"whiteAlpha.800"}>Total</Td>
                            <Td color={"whiteAlpha.800"}></Td>
                            <Td color={"whiteAlpha.800"}>{tableDatas.reduce((acc, price) => acc + price.amount, 0)}</Td>
                        </Tr>
                    </Tfoot>
            </Table>
        </TableContainer>

        </>
    )
}
export default ExpenseTable