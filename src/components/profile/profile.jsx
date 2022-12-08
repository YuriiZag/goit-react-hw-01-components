import { Box } from "components/utils/box";
import { Avatar, UserName, Tag, Location, Stats, StatsInf, StatsItem} from "./profile.styled";
import PropTypes from 'prop-types';

export const ProfileCard = (({user}) => {
    return (<Box width='400px' display='flex' alignItems='center' justifyContent='center' flexDirection='column' bg='sandyBrown' pt='64px' boxShadow='1px 4px 4px rgba(0, 0, 0, 0.5)' mb='64px'>
        <Avatar src={ user.avatar } alt={ user.username }></Avatar>
        <UserName>{user.username}</UserName>
        <Tag href="#">@{user.tag}</Tag>
        <Location>{ user.location }</Location>
        <Stats>
            <StatsItem key={user.stats.followers}>
                Followers
                <StatsInf>{user.stats.followers}</StatsInf>
            </StatsItem>
            <StatsItem key={user.stats.views}>
                Followers
                <StatsInf>{user.stats.views}</StatsInf>
            </StatsItem>
            <StatsItem key={user.stats.likes}>
                Followers
                <StatsInf>{user.stats.likes}</StatsInf>
            </StatsItem>
        </Stats>
    </Box>);
})

ProfileCard.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape().isRequired,
    }) 
    
}