import { StrictMode } from 'react'
import Raect from "react"
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import Product from './pages/Product.jsx'

const routerProvider = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Products />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/product-details/:id",
				element: <Product />,
			},
		],
	},
]);

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>,
)
