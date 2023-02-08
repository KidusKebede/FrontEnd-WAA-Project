import { Route, Routes, Navigate } from "react-router";
// import { Routes } from "react-router-dom";
import Properties from "../container/Properties";



export default function PageRoutes(props) {
    return (
        <Routes>
        

            <Route path="/" element={<Properties />}></Route>
            {/* <Route path="/" element={<Navigate to="Properties"/>}></Route> */}
            {/* <Route path="properties">
                <Route index element={<Students />} />
                <Route path=":id" element={<StudentDetails />}></Route>
            </Route> */}

            {/* <Route path="addStudent" element={<AddStudent />}></Route> */}
            {/* <Route path="/course" element={<Course />}></Route> */}
            {/* <Route path="selected" element={<SelectedStudent />}></Route> */}

        </Routes>
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


