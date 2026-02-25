export default function ProductCard(props) {

    console.log(props)

    return (
         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-64 overflow-hidden">

  <img 
    src={props.image} 
    alt={"picture of " + props.name}
    className="w-full h-48 object-cover"
  />

  <div className="p-5">
    <h1 className="text-xl font-semibold text-gray-800 mb-2">
      {props.name}
    </h1>

    <p className="text-lg font-bold text-[#44A194] mb-4">
      ${props.price}
    </p>

    <button className="w-full bg-[#44A194] hover:bg-[#368b7f] text-white font-medium py-2 rounded-xl transition duration-300">
      Add to Cart
    </button>
  </div>

</div>

    )
}
