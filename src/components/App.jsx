import { ProfileCard } from './profile/profile'
import { DataStats } from './data/data';
import { FriendsList } from "./friends/friendsList";
import { TransactionTable } from './transactions/transactions';

import data from '../data.json'
import user from '../user.json'; 
import friends from '../friends.json'
import transactions from '../transactions.json'

export const App = () => {
  return (
    <>
    <ProfileCard user={user}></ProfileCard>
      <DataStats data={data}></DataStats>
      <FriendsList friends={friends}></FriendsList>
      <TransactionTable transactions={transactions}></TransactionTable>
    </>
  );
};
