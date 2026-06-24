import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    // Toast Notifier
    const [toast, setToast] = useState(null);

    function showToast(message) {
        setToast(message);

        setTimeout(() => {
            setToast(null);
        }, 2000);
    }


    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    // SAVE CART (replacement for saveCart())
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // ADD TO CART (your logic converted)
    function addToCart(name, price, image) {
        setCart(prev => {
            const existing = prev.find(i => i.name === name);

            if (existing) {
                return prev.map(i =>
                    i.name === name ? { ...i, qty: i.qty + 1 } : i
                );
            }

            return [...prev, { name, price, image, qty: 1 }];
        });
    }

    function changeQty(name, amount) {
        setCart(prev =>
            prev
                .map(item =>
                    item.name === name
                        ? { ...item, qty: item.qty + amount }
                        : item
                )
                .filter(item => item.qty > 0)
        );
    }

    // Remove
    function removeItem(name) {
        setCart(prev => prev.filter(i => i.name !== name));
    }

    // Empty
    function clearCart() {
        setCart([]);
    }

    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                changeQty,
                removeItem,
                clearCart,
                cartCount,
                showToast,
                toast,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
