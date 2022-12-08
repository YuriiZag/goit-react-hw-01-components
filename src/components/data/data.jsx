import PropTypes from 'prop-types';
import { Box } from "components/utils/box";
import { Heading, DataList, DataListItem, DataPercent } from 'components/data/data.styled'

export const DataStats = (({ data }) => {
    return (
        <Box width='600px' as='section' mb='64px'>
            <Heading>Upload stats</Heading>
            <DataList>
                {data.map(({id, label, percentage}) => {
                    return (
                        <DataListItem key={id}>
                            {label}
                            <DataPercent>{ percentage}%</DataPercent>
                        </DataListItem>
                    )
                })}
            </DataList>
        </Box>
     )
})
 
DataStats.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }) 
        
    )
}