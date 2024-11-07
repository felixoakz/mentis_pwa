import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./RequireAuth";

import Init from "components/shared/Init";
import LoginScreen from "pages/LoginScreen";
import RegisterScreen from "pages/RegisterScreen"

export default function Navigation() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route element={<RequireAuth />}>
        <Route path="/" element={<Init />} />

      </Route>
    </Routes>
  );
}
