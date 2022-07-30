import { Fragment } from "react";
import { UserResults } from "../components/users/UserResults";
import { UserSearch } from "../components/users/UserSearch";

export const Home = () => {
  return (
    <Fragment>
        <UserSearch/>
        <UserResults/>
    </Fragment>
  )
}