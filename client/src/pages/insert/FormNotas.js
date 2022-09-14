import { useState } from "react";

import "./insert.css";
import { SelectClass } from "./SelectClass";
import { InsertNotas } from "./InsertNotas";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";

export function FormNotas() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
    <TopBar PageTitle="Inserir Avaliação" PageSpan="Escolar" />

    <div className="insertContainer">
      <div className="insertForm">
        { currentUser ? <></> : <p>Formulário de menções</p> }
        
        {currentUser === null ? (
          <SelectClass setCurrentUser={setCurrentUser} />
        ) : (
          <InsertNotas />
        )}
      </div>
    </div>
    </>
  );
}
