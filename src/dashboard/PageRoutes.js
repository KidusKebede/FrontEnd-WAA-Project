import { Route, Routes, Navigate } from "react-router";
// import { Routes } from "react-router-dom";
import Properties from "../container/Properties";
import RentedProperties from "../adminDashBoard/RentedProperties";
import RecentCustomer from "../adminDashBoard/RecentCustomer";
import Rent from "../container/Rent";
import Buy from "../container/Buy";
import PropertyDetails from "../component/PropertyDetails";
import FavoriteList from "../container/FavoriteList";
import Applications from "../component/owner/Applications";
import AddProperty from "../component/owner/AddProperty";
import MyProperties from "../component/owner/MyProperties";

import LogInPage from "../component/LogInPage";


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

            <Route path="favorites">
            <Route index  element={<FavoriteList />}/>
            <Route path=":id" element={<PropertyDetails />}></Route>
            </Route>

            <Route path="rentedproperties" element={<RentedProperties />}></Route>
            <Route path="recentcustomers" element={<RecentCustomer />}></Route>

            <Route path="myproperties" element={<MyProperties />}></Route>
            <Route path="applications" element={<Applications />}></Route>
            <Route path="addproperty" element={<AddProperty />}></Route>

            <Route path="login" element={<LogInPage/>}></Route>
            

            

      
           

        </Routes>
      
    );
}


{/* <Routes>
<Route path="products" element={<Products />}>
    <Route path=":id" element={<ProductDetails />} />
</Route>

<Route path="create-product" element={<NewProductHook />} />
</Routes> */}


