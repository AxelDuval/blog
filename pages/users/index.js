import React from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from "uuid";


export default function index(props) {
  return (
    <div className="container px-4 py-5">
      <h1 className="text-center">Les utilisateurs</h1>
      <p className="text-center">Voici les utilisateurs</p>
      <div className="row justify-content-center mt-5">
        {props.users.map((user) => (
          <div key={uuidv4()} className="col-12 col-lg-6 m-2">
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{user.username}</h5>
                <Link href={`/users/${user.id}`}>
                  <a className="card-link">Contacter</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
  
    return {
      props: {
        users,
      },
    };
  }
  