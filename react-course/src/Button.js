export function Button({text, name='user'}) {
    if (!text) {
        console.error("El texto es requerido");
    }
    return <button onClick={() => {
        console.log('Hola')
    }}>
        {text} - {name}
    </button>
}
