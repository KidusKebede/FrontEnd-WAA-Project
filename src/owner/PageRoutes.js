import { Route, Routes, Navigate } from "react-router";
import Properties from "../container/Properties";
import AddProperty from "./AddProperty";
import Applications from "./Applications";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/owner"} />}></Route>
      <Route path="owner">
        <Route index element={<Properties />} />
      </Route>
      <Route path="applications" element={<Applications />} />
      <Route path="add_property" element={<AddProperty />} />
    </Routes>
  );
}
