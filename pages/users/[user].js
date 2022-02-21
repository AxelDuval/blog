import React from "react";

export default function user(props) {
  return (
    <div className="container px-4 py-5">
      <div className="row justify-content-center mt-5">
        <div lassName="col-12 col-lg-6 m-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">{props.user.username}</h5>
              <p className="text-center">{props.user.name}</p>
              <p className="text-center">{props.user.email}</p>
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
