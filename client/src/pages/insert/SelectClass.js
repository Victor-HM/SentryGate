import Select from "react-select";

export function SelectClass({ setCurrentUser }) {
 const userOptions = [
   {
     label: "1ºA - Quimica - Ingles",
     value: "1ºA - Quimica - Ingles",
   },
   {
    label: "2ºB - Administração - Ingles",
    value: "2ºB - Administração - Ingles",
   },
   {
    label: "3ºA - Desenvolvimento de Sistemas - Portugues",
    value: "3ºA - Desenvolvimento de Sistemas - Portugues",
   },
   {
    label: "3ºB - Desenvolvimento de Sistemas - Portugues",
    value: "3ºB - Desenvolvimento de Sistemas - Portugues",
   },
 ];

 return(
  <div className="formClass">
    <div className="titleInsert">
      <p>Selecionar Turma</p>
    </div>
   
   <label htmlFor=""></label>
   <Select 
    options={userOptions}
    styles={{ width: 300 }}
    onChange={e => setCurrentUser(e.value)}
   />
  </div>
 )
}