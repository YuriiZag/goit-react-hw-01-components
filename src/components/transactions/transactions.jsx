import PropTypes from 'prop-types';
import {Table, TableHead, TableHeader, TableRow, TableBody, TableData} from 'components/transactions/transactions.styled'

export const TransactionTable = (({ transactions }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Currency</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TableRow key={id}>
                            <TableData>{ type }</TableData>
                            <TableData>{ amount }</TableData>
                            <TableData>{ currency}</TableData>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )

})

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}