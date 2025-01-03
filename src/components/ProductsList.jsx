import React, { useEffect, useRef, useState } from 'react';
import Productitem from './Productitem';
import axios from 'axios';
import ProductLoadingSkeleton from './ProductLoadingSkeleton';
import { AiOutlineSearch } from 'react-icons/ai';

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  const [originalProducts, setOriginalProducts]= useState([])
  const searchRef = useRef(null)

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get("https://dummyjson.com/products?limit=101"); 


        // Filter products from index 78 to 100
        // const filteredProducts = data.products.slice(77, 120); // Index starts at 0
        setProducts(data.products);
        setOriginalProducts(data.products);
        setLoading(false)
      } catch (error) {
        setLoading(false)

      }
    };

    fetchProducts();
  }, []);


	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm);
		}, 300);
		return () => {
			clearTimeout(timerId);
		};
	}, [searchTerm]);

	useEffect(() => {
		if (debouncedSearchTerm) {
			const fetchProducts = async () => {
				try {
					setLoading(true);
					const { data } = await axios.get(
						`https://dummyjson.com/products/search?q=${searchTerm}`
					);

					setProducts(data.products);
					setLoading(false);
				} catch (e) {
					setLoading(false);
					console.log(e);
				}
			};
			fetchProducts();
		}else{
      setProducts(originalProducts)
    }
	}, [debouncedSearchTerm]);

  useEffect(()=>{
    if(searchRef.current){
      searchRef.current.focus()
    }
  },[products])


  if(loading) return <ProductLoadingSkeleton />

  return (
    <>
      <div className="relative">
        <input 
        ref={searchRef}
         type="text" placeholder="Search for products...." 
         value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
         className="p-2 pl-10 rounded border shadow w-full focus:outline-none focus:border-pink-300" />
         <span className="absolute left-3 top-2 transform-y-1 text-gray-400">
         <AiOutlineSearch className="w-6 h-6 text-pink-600" />
         </span>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            
            {
   
           products.map((product) => (
             <Productitem key={product.id} product={product} />))}
           </div>
    </>
  );
};