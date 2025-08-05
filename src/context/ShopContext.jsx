import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import productsData from '../data/products.json'; // Importing from JSON

export const ShopContext = createContext(null);

// A mock database of users for static login
const mockUsers = [
    { email: "user@example.com", password: "password123", name: "Test User" }
];

const ShopContextProvider = (props) => {
    const currency = 'R';
    const delivery_fee = 50;
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState({});

    // Load products from JSON and user from localStorage on initial render
    useEffect(() => {
        setProducts(productsData);
        const storedUser = localStorage.getItem('pamroseUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // --- Authentication ---
    const login = (email, password) => {
        const foundUser = mockUsers.find(u => u.email === email && u.password === password);
        if (foundUser) {
            const userData = { email: foundUser.email, name: foundUser.name };
            localStorage.setItem('pamroseUser', JSON.stringify(userData));
            setUser(userData);
            toast.success("Login Successful!");
            navigate('/');
        } else {
            toast.error("Invalid credentials. Please try again.");
        }
    };

    const register = (name, email, password) => {
        // In a real app, you'd check if the user exists before adding
        mockUsers.push({ name, email, password });
        const userData = { email, name };
        localStorage.setItem('pamroseUser', JSON.stringify(userData));
        setUser(userData);
        toast.success("Registration Successful!");
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('pamroseUser');
        setUser(null);
        toast.info("You have been logged out.");
        navigate('/login');
    };

    // --- Cart Logic ---
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        toast.success(`${products.find(p => p._id === itemId).name} added to cart!`);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId]) {
                delete newCart[itemId];
            }
            return newCart;
        });
    };
    
    const updateQuantity = (itemId, quantity) => {
        if (quantity < 1) {
            removeFromCart(itemId);
            return;
        }
        setCartItems((prev) => ({
            ...prev,
            [itemId]: quantity
        }));
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }


    const contextValue = {
        currency,
        delivery_fee,
        products,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartAmount,
        getCartCount,
        user,
        login,
        register,
        logout,
        navigate
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;