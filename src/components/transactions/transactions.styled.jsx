import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;
` 
export const TableHead = styled.thead`
    background-color: ${p => p.theme.colors.tableHeaderColor};
`
export const TableHeader = styled.th`
    color: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal};
    width: 200px;
    height: 40px;
`
export const TableRow = styled.tr`
    :nth-child(2n){
        background-color: ${p => p.theme.colors.statsBg};
    }
`
export const TableBody = styled.tbody`
    color: ${p => p.theme.colors.profileSecondaryColor};
    border: ${p => p.theme.borders.normal};
`
export const TableData = styled.td`
    text-align: center;
    height: 40px;
    border: ${p => p.theme.borders.normal};

`