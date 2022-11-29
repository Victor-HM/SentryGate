import { useState } from "react";

import Axios from "axios";

import {
  Stack,
  Box,
  Typography,
  Modal,
  Fade,
  Button,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
  Divider,
  Grow,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";

export function Materias({ openMaterias, setOpenMaterias }) {

  const [nomeMateria, setNomeMateria] = useState()

  const btnStyle = {
    color: "white",
    borderColor: "transparent",
    borderRadius: "0.5rem",
    marginTop: 4,
    transition: "all 0.5s ease-out",
    fontWeight: "bold",
    backgroundColor: "#5819BB",
    "&:hover": {
      backgroundColor: "#5819BB",
      borderColor: "transparent",
    },
  };

  const modalStyle = {
    position: "absolute",
    borderRadius: 5,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "blueviolet",
    boxShadow: 24,
    p: 4,
  };

  const handleCloseMaterias = () => setOpenMaterias(false);

  function handleSubmit() {
    let userObj;

    Axios.post("http://localhost:3001/cadastro/materia", {
      nome_materia: nomeMateria
    })
      .then((response) => {
        alert('Matéria adicionada com sucesso.')

        userObj = response;

        console.log(userObj);

        setOpenMaterias(false)
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openMaterias}
      onClose={handleCloseMaterias}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openMaterias}>
        <Box sx={modalStyle}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Criar uma nova matéria
          </Typography>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2, mb: 3, color: "white" }}
          >
            Nos diga o nome da matéria que deseja inserir
          </Typography>

          <Divider />

          <TextField
            placeholder="Nome da matéria"
            value={nomeMateria}
            onChange={e => setNomeMateria(e.target.value)}
            sx={{ color: "white", mt: 3 }}
            variant="filled"
          />

          <Button variant="outlined" onClick={handleSubmit} sx={btnStyle}>
            Adicionar turma
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
