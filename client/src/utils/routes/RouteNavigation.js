// React imports
import { Route, Routes } from "react-router-dom";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../hooks/responses/NotFound";

import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";

import PrivateRouteCoordinator from "./PrivateRouteCoordinator";
import PrivateRouteStudent from "./PrivateRouteStudent";

// Global
import { Stack } from "@mui/material";

export default function RouteNavigation () {

  return (
  
    <Stack sx={{flexDirection: 'row', width: '95%'}}>

      <LeftBar />
      
      <Stack sx={{width: '100%', height: 'auto', alignItems: 'center'}}>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/login" element={<Form />} />
          <Route
          path="/register/student"
          element={
            <PrivateRouteCoordinator redirectTo="*">
              <RegisterStudent />
            </PrivateRouteCoordinator>
          }
        />

        <Route
          path="/register/teacher"
          element={
            <PrivateRouteCoordinator redirectTo="*">
              <RegisterTeacher />
            </PrivateRouteCoordinator>
          }
        />

        <Route
          path="/report"
          element={
            <PrivateRouteStudent redirectTo="*">
              <Boletim />
            </PrivateRouteStudent>
          }
        />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Stack>

    </Stack>

  );
}