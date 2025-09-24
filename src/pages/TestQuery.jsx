// src/pages/TestQuery.jsx
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_HELLO = gql`
  query {
    hello
  }
`;

export default function TestQuery() {
  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Server says: {data.hello}</p>;
}
