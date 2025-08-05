import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [skinConcern, setSkinConcern] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relevant')

  const toggleFilter = (value, filterState, setFilterState) => {
    setFilterState(prev => 
      prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
    );
  }

  // This useEffect now correctly initializes the filtered list with all products
  useEffect(() => {
    if (products.length > 0) {
      setFilterProducts(products);
    }
  }, [products]);

  // This useEffect handles all filtering and sorting logic
  useEffect(() => {
    let tempProducts = [...products];

    // Apply search filter
    if (showSearch && search) {
      tempProducts = tempProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Apply category filter
    if (category.length > 0) {
      tempProducts = tempProducts.filter(item => category.includes(item.category));
    }

    // Apply skin concern filter
    if (skinConcern.length > 0) {
      tempProducts = tempProducts.filter(item => 
        skinConcern.some(concern => item.skin_concern.includes(concern))
      );
    }

    // Apply sorting
    switch (sortType) {
      case 'low-high':
        tempProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        tempProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // No sorting for 'relevant'
        break;
    }

    setFilterProducts(tempProducts);

  }, [category, skinConcern, search, showSearch, products, sortType]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>PRODUCT CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"Kits"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Kits</p>
            <p className='flex gap-2'><input className='w-3' value={"Moisturizers"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Moisturizers</p>
            <p className='flex gap-2'><input className='w-3' value={"Oils"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Oils</p>
            <p className='flex gap-2'><input className='w-3' value={"Serums"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Serums</p>
            <p className='flex gap-2'><input className='w-3' value={"Tools"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Tools</p>
            <p className='flex gap-2'><input className='w-3' value={"Scrubs"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Scrubs</p>
            <p className='flex gap-2'><input className='w-3' value={"Shave Creams"} onChange={(e) => toggleFilter(e.target.value, category, setCategory)} type="checkbox" /> Shave Creams</p>
          </div>
        </div>

        {/* Skin Concern Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SKIN CONCERN</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input className='w-3' value={"Dry Skin"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Dry Skin</p>
            <p className='flex gap-2'><input className='w-3' value={"Shave Bumps"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Shave Bumps</p>
            <p className='flex gap-2'><input className='w-3' value={"Ingrown Hairs"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Ingrown Hairs</p>
            <p className='flex gap-2'><input className='w-3' value={"Irritation"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Irritation</p>
            <p className='flex gap-2'><input className='w-3' value={"Glow"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Glow</p>
            <p className='flex gap-2'><input className='w-3' value={"Firming"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Firming</p>
            <p className='flex gap-2'><input className='w-3' value={"Dark Spots"} onChange={(e) => toggleFilter(e.target.value, skinConcern, setSkinConcern)} type="checkbox" /> Dark Spots</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"PRODUCTS"} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' name="sort" id="sort">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price Low to High</option>
            <option value="high-low">Sort by: Price High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              // This is the corrected line
              <ProductItem key={item._id} id={item._id} thumbnail={item.thumbnail} name={item.name} price={item.price} />
            ))
          ) : (
            <p className='col-span-full'>No products match your criteria.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection