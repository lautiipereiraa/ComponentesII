import Titulo from "./Titulo"

const Formulario = () => {
    const titulo = 'Titulo del input'
    let subTitulo = 'Subtitulo del input'
    return (
      <form>
        <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <input type="text" placeholder='Escriba su nombre' style={{fontSize: 20}}/>
      </form>
    )
  }

export default Formulario