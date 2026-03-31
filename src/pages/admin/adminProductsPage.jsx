import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbTrash } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import LoadingAnimation from "../../components/loadingAnimation";
import ProductDeleteModal from "../../components/productDeleteModal";
export default function AdminProductsPage(){

    const [products , setProducts] = useState([])
    const [isProductsAreLoaded , setIsProductsAreLoaded] = useState(false)
   
    useEffect(
        ()=>{
            
            if( ! isProductsAreLoaded){
                const token = localStorage.getItem("token")

                axios.get(import.meta.env.VITE_API_URL+"/products",{
                    headers:{
                        "Authorization": "Bearer "+ token
                    }
                }).then(
                    (response)=>{
                        setProducts(response.data)
                        setIsProductsAreLoaded(true)
                    }
                ).catch(
                    (error)=>{
                        console.log(error)
                    }
                )

            }            
        },
        [isProductsAreLoaded]
    )

    

    return(
        <div className="w-full h-full overflow-y-auto p-6 bg-gray-100">
        
    <div className="sticky top-0 z-10 w-full h-[80px] rounded-lg bg-white flex items-center px-6 justify-between shadow border">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>                
    </div>

    {
        isProductsAreLoaded ?
        <div className="mt-6 bg-white rounded-lg shadow border overflow-hidden">
            <table className="w-full text-sm text-gray-700">
                <thead className="bg-gray-200 text-gray-800">
                    <tr>
                        <th className="p-3 text-center">Image</th>
                        <th className="p-3 text-center">Product ID</th>
                        <th className="p-3 text-center">Name</th>
                        <th className="p-3 text-center">Price</th>
                        <th className="p-3 text-center">Labelled Price</th>
                        <th className="p-3 text-center">Brand</th>
                        <th className="p-3 text-center">Model</th>
                        <th className="p-3 text-center">Category</th>
                        <th className="p-3 text-center">Availability</th>
                        <th className="p-3 text-center">Stock</th>
                        <th className="p-3 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products.map((item) => {
                            return (
                                <tr 
                                    key={item.productId}
                                    className="border-t hover:bg-gray-100 transition"
                                >
                                    <td className="p-3 text-center">
                                        <img 
                                            src={item.images[0]} 
                                            alt={item.name} 
                                            className="w-12 h-12 object-cover rounded mx-auto border"
                                        />
                                    </td>
                                    <td className="p-3 text-center">{item.productId}</td>
                                    <td className="p-3 text-center font-medium">{item.name}</td>
                                    <td className="p-3 text-center text-green-600 font-semibold">{item.price}</td>
                                    <td className="p-3 text-center text-yellow-600">{item.labelledPrice}</td>
                                    <td className="p-3 text-center">{item.brand}</td>
                                    <td className="p-3 text-center">{item.model}</td>
                                    <td className="p-3 text-center">{item.category}</td>
                                    <td className="p-3 text-center"></td>
                                    <td className="p-3 text-center font-semibold">{item.stock}</td>
                                    <td className="p-3 text-center flex justify-center items-center gap-3">
                                        <ProductDeleteModal 
                                            product={item} 
                                            refresh={()=>{
                                                setIsProductsAreLoaded(false)
                                            }}
                                        />

                                        <Link to="/admin/edit-product" state={item}>
                                            <BiEdit className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer" />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }                   
                </tbody>
            </table>
        </div>
        :
        <LoadingAnimation/>
    }

    <Link 
        to="/admin/add-product" 
        className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-accent flex justify-center items-center text-white text-2xl rounded-full shadow-lg hover:bg-black transition"
    >
        <FaPlus />
    </Link>
</div>
    )
}