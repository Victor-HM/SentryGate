
// React imports
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import Context from "../../contexts/Context";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { FormNotas } from '../../pages/insert/FormNotas'
import { NotFound } from "../../components/UI/notfound/404";

import PrivateRoute from "./PrivateRoute";
import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";

// Global

export default function RouteNavigation () {

  const location = useLocation()

  const { auth } = useContext(Context)

  return (
  
      <div className="components">
        {auth && location.pathname != '/' ? <LeftBar /> : <></>}

        
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<PrivateRoute redirectTo='/'><Main /></PrivateRoute>} />
          <Route path="/login" element={<Form />} />
          <Route path="/register/student" element={<RegisterStudent />} />
          <Route path="/register/teacher" element={<RegisterTeacher />} />
          <Route path="/boletim" element={<PrivateRoute redirectTo='/'><Boletim /></PrivateRoute>} />
          <Route path="/insert" element={<PrivateRoute redirectTo='/'><FormNotas /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

  );
}
