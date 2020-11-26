
import React from 'react';

import { withTheme } from 'styled-components';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { GRAPH_API } from '../src/services/api';
import Base from './pages/base';
import * as path from 'path'
import * as dotenv from 'dotenv';

/**
 * @load {PATH/.env}
 */
dotenv.config({ 
  path: path.join(process.cwd(), `.env.local`)
});

const client = new ApolloClient({
	uri: `${GRAPH_API}`,
});

interface Props {
  theme: any;
}

function App(props:Props) {
  return (
    <ApolloProvider client={client}>
      <Base theme={props.theme}/>
    </ApolloProvider>
  );
}

export default withTheme(App);
