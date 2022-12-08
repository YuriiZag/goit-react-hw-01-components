import styled from "styled-components";
import { getRandomHexColor } from "components/utils/colorPicker";

export const Heading = styled.h1`
    font-size: ${p => p.theme.fontSizes.l}px;
    text-align: center;
    text-transform: uppercase;
`
export const DataList = styled.ul`
    list-style: none;
    display: flex;
`
export const DataListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${getRandomHexColor};
    width: 25%;
    font-size: ${p => p.theme.fontSizes.m}px;
    border: ${p => p.theme.borders.normal}${p => p.theme.colors.profileSecondaryTextColor};
    color: ${p => p.theme.colors.white};
`
export const DataPercent = styled.span`
    margin-top: ${p => p.theme.space[3]}px;
`