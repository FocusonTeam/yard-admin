import React from "react";
import { setContext } from "@apollo/client/link/context";
import {onError} from '@apollo/client/link/error';
import {ApolloClient, InMemoryCache, createHttpLink, from} from '@apollo/client';
import { getLoginToken } from '../utils/storageUtils';
import { isLoggedVar, errorMessageVar } from '../models/fragmentVar';

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

const httpLink = createHttpLink({
  uri : process.env.REACT_APP_GRAPHQL_ENDPOINT //admin Server
});

const authLink = setContext(async (req, {headers}) => {

  const token = await getLoginToken('accessToken');

  return {
    ...headers,
    headers : {
      authorization: token ? `Bearer ${token}` : null,
    }
  }
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path, extensions}) => {
      console.log(`[GraphQL Error] ${extensions}, ${message}, Location: ${locations}, Path: ${path}`,);
      errorMessageVar(message);
    });
  }

  if (networkError) {
      console.log(`[Network Error] Message: ${networkError.message}, Name: ${networkError.name}, Cause: ${networkError.cause}`);
  }
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedVar();
          }
        },
      }
    }
  }
});

export const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedVar();
            }
          },
        }
      }
    }
  }),
})