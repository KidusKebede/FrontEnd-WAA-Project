import { Route, Routes, Navigate } from "react-router";
// import { Routes } from "react-router-dom";
import Properties from "../container/Properties";
import Rent from "../container/Rent";
import Buy from "../container/Buy";
import PropertyDetails from "../component/PropertyDetails";



export default function PageRoutes(props) {
    return (
        <Routes>
        

            {/* <Route path="/" element={<Properties />}></Route> */}
            {/* <Route path="/" element={<Navigate to="Properties"/>}></Route> */}
            <Route path="/">
                <Route index element={<Properties />} />
                <Route path=":id" element={<PropertyDetails />}></Route>
            </Route>

            <Route path="rent">
                 <Route index element={<Rent />}/>
                 <Route path=":id" element={<PropertyDetails />}></Route>
            </Route>

            <Route path="buy">
            <Route index  element={<Buy />}/>
            <Route path=":id" element={<PropertyDetails />}></Route>
            </Route>

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


