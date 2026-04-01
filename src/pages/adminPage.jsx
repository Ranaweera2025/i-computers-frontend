import { Link, Route, Routes } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProductPage";
import AdminEditProductPage from "./admin/adminEditProductPage";

export default function AdminPage(){
    return(
        <div className="w-full h-screen flex bg-gray-100">
    
    {/* Sidebar */}
    <div className="w-[200px] h-full bg-accent text-white flex flex-col shadow-lg">
        
        <div className="h-[80px] flex items-center justify-center border-b border-white/10">
            <h1 className="text-xl font-bold tracking-wide">Admin Panel</h1>
        </div>

        <div className="flex flex-col mt-4 gap-1 px-2 text-8px">
            <Link to="/admin/" className="py-3 px-4 rounded-lg hover:bg-white/10 transition">Orders</Link>
            <Link to="/admin/products" className="py-3 px-4 rounded-lg hover:bg-white/10 transition">Products</Link>
            <Link to="/admin/users" className="py-3 px-4 rounded-lg hover:bg-white/10 transition">Users</Link>
            <Link to="/admin/reviews" className="py-3 px-4 rounded-lg hover:bg-white/10 transition">Reviews</Link>
        </div>

    </div>

    {/* Content */}
    <div className="flex-1 h-full p-4">
        <div className="w-full h-full bg-white rounded-2xl shadow border overflow-auto">
            <Routes>
                <Route path="/" element ={<h1>Orders Dashboard</h1>} />
                <Route path="/products" element ={<AdminProductsPage/>} />
                <Route path="/add-product" element ={<AdminAddProductPage/>} />
                <Route path="/edit-product" element ={<AdminEditProductPage/>} />
                <Route path="/users" element ={<h1>Users Dashboard</h1>} />
                <Route path="/reviews" element ={<h1>Reviews Dashboard</h1>} />
            </Routes>
        </div>
    </div>

</div>
    )
}