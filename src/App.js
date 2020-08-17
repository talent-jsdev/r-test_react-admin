import * as React from "react";
// import { Admin } from 'react-admin';
// import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
// const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    {/* <Resource name="posts" list={PostList} /> */}
    {/* <Resource name="posts" list={PostList} edit={EditGuesser} /> */}
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
)

export default App;