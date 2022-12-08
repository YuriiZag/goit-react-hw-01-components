import styled from "styled-components";

export const Friends = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: ${p => p.theme.space[6]}px;
`
export const Friend = styled.li`
    padding: ${p => p.theme.space[4]}px;
    width: 500px;
    border: ${p => p.theme.borders.dashed};
    border-radius: ${p => p.theme.radii.normal}px;
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.friendsListItemBackground};
`
export const IsOnline = styled.div`
    border-radius: ${p => p.theme.radii.round};
    width: 20px;
    height: 20px;
    background-color: ${p => p.status ?  'green' : 'red'};
`
export const Avatar = styled.img`
    width: 60px; 
    border-radius: ${p => p.theme.radii.normal}px;
`
export const UserName = styled.p`
    font-size: ${p => p.theme.fontSizes.l}px;
    font-weight: ${p => p.theme.fontWeights.bold};
    margin: ${p => p.theme.space[0]};
`