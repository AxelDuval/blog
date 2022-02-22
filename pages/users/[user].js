import React from "react";

export default function user(props) {
  return (
    <div className="container px-4 pt-3">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-6 m-2">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">{props.user.username}</h4>
              <h5 className="card-subtitle mb-2 text-muted text-center">
                {props.user.name}
              </h5>
              <ul className="list-group text-center">
                <li className="list-group-item">Email : {props.user.email}</li>
                <li className="list-group-item">Website : {props.user.website}</li>
                <li className="list-group-item">Phone : {props.user.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((item) => ({
    params: { user: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
