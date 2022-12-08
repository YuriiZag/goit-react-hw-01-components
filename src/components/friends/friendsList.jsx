import { PropTypes } from "prop-types";
import { Friends, Friend, Avatar, IsOnline, UserName } from "./friendsList.styled";

export const FriendsList = (({ friends }) => {
    return (
        <Friends>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <Friend key={id}>
                        <IsOnline  status={isOnline}> </IsOnline>
                        <Avatar src={avatar}></Avatar>
                        <UserName>{ name }</UserName>
                   </Friend> 
                )
            })}
        </Friends>
    )
})

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    )
}