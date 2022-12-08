import styled from "styled-components";

export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    width: 150px;
    height: 150px;
`

export const UserName = styled.h1`
    font-size: ${p => p.theme.fontSizes.l}px;

`
export const Tag = styled.a`
    font-size: ${p => p.theme.fontSizes.s}px;
    text-decoration: none;
    color: ${p => p.theme.colors.profileSecondaryTextColor};
    
`
export const Location = styled.p`
    font-size: ${p => p.theme.fontSizes.s}px;
    color: ${p => p.theme.colors.profileSecondaryTextColor};
`

export const Stats = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    padding: ${p => p.theme.space[0]};
    margin: ${p => p.theme.space[0]};
`
export const StatsItem = styled.li`
    height: 70px;
    color: ${p => p.theme.colors.profileSecondaryTextColor};
    background-color: ${p => p.theme.colors.statsBg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 33%;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal}${p => p.theme.colors.profileSecondaryColor};
`
export const StatsInf = styled.span`
    margin-top: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.black};
    font-size: ${p => p.theme.fontSizes.m}px;
    font-weight: ${p => p.theme.fontWeights.bold};
`