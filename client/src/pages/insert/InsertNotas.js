import { Avatar } from '@mui/material'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

const dataAluno = [
 {
  id: '1',
  name: 'Victor Hugo Carvalho Moreira dos Santos',
  image: 'https://github.com/Victor-HM.png',
 },
 {
  id: '2',
  name: 'Alison Christian',
  image: 'https://github.com/AlisonChs.png',
 },
 {
  id: '3',
  name: 'Bruno Barbosa',
  image: 'https://github.com/BrunoDeSP.png',
 },
 {
  id: '4',
  name: 'Felipe Dourado',
  image: 'https://github.com/FS-Dourado.png',
 },
]

export function InsertNotas() {

 const [aluno, setAluno] = useState(dataAluno[0])

 function handleInsertAluno(aluno) {
  setAluno(aluno)
 }
 return(
  <div className="stepInsert">
   <div className="containerInsert">
    <div className="infoAluno">
     <div className='userAluno'>
      <Avatar src={aluno.image} sx={{ width: 130, height: 130 }} />
      <div className='nameAluno'>
       <p>{aluno.name}</p>
       <div className='button'><p>Visualizar Perfil</p></div>
      </div>
     </div>

     <div className='typeAvaliacao'>
      <p>Informe aqui a sua avaliação</p>
      <div className='classButton'>
       <div className='button'><p>Projetar Avaliação</p></div>
       <div className='button'><p>Salvar</p></div>
      </div>
     </div>
    </div>

    <div className="insertNota">
     <div className='inputInsert'>

      <div className='classInput'>
       <input type="text" className='nameAtivity' />
       <div className='notaAtivity'>
        <input type="text" />
       </div>
      </div>

      <div className='classInput'>
       <input type="text" className='nameAtivity' />
       <div className='notaAtivity'>
        <input type="text" />
       </div>
      </div>

      <div className='classInput'>
       <input type="text" className='nameAtivity' />
       <div className='notaAtivity'>
        <input type="text" />
       </div>
      </div>

      <div className='classInput'>
       <input type="text" className='nameAtivity' />
       <div className='notaAtivity'>
        <AddCircleOutline />
       </div>
      </div>


     </div>
      <div className='buttonSubmit'>
       <h1>Concluir</h1>
      </div>
    </div>

   </div>

   <div className="switchAluno">
    <div className="filterAluno">
     <ManageSearchIcon sx={{ width: 35, height: 35 }} />
     <input type="text" placeholder='Procurar...' />
    </div>
    <div className="listAluno">
     { dataAluno.map((aluno) => {
      return (
       <div key={aluno.id} className='boxAluno' onClick={() => handleInsertAluno(aluno)}>
        <Avatar src={aluno.image} sx={{ width: 70, height: 70 }} />
        <p>{aluno.name}</p>
       </div>
      )
     }) }
    </div>
   </div>
  </div>
 )
}