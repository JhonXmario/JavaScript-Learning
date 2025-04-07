export function Greeting({ title, name }) { // se debe comenzar con mayuscula debido a que es un componente, si no se pone mayuscula se considera una variable y no un componente
  console.log(title);
  return <h1>{`${title} ${name}`}</h1>;

  /* const user = {
      firstName: "John",
      lastName: "Doe",
    };
    return (
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    );
  
    return (
      <>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
      </>
    ); */

  /* const married = true;
  
    return <h1>{married ? "Estoy casado" : "Estoy soltero"}</h1>; */

  /* return (
      <div>
        <h1>{ 2 + 2 } si</h1>
        <p>Welcome to my React application.</p>
      </div>
    ); */
}

export function UserCard() {
    return <h1>UserCard</h1>
}