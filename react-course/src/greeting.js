export function Greeting({ title, name = "User" }) {
  // se debe comenzar con mayuscula debido a que es un componente, si no se pone mayuscula se considera una variable y no un componente
  return <h1>{`${title} dice ${name}`}</h1>;

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

export function UserCard({ name, amount, married, address, greet }) { // Estos son props
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{married ? "Si estoy casado" : "estoy soltero"}</h1>
      <p>${amount}</p>
      <ul>
        <li>Pais: {address.pais} </li>
        <li>Estado: {address.estado} </li>
      </ul>
    </div>
  );
}
