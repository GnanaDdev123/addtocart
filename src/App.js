import React, { useState } from "react";
import "./App.css";

// Mock Data (from the JSON you provided)
const menuData = [
  {
    "id": "1",
    "name": "Black Coffee",
    "category": "Beverages",
    "sub_category": "Coffee",
    "available_quantity": 10,
    "price": 199.18,
    "image_url": "https://www.livofy.com/health/wp-content/uploads/2020/05/black-coffee.jpg",
    "type": "veg"
  },
  {
    "id": "2",
    "name": "Espresso",
    "category": "Beverages",
    "sub_category": "Coffee",
    "available_quantity": 8,
    "price": 245.18,
    "image_url": "https://coffeehero.com.au/cdn/shop/articles/758214849ae27a07c55af11f0f0f633b_2048x2048.jpg?v=1623281348",
    "type": "veg"
  },
  {
    "id": "3",
    "name": "Double Espresso",
    "category": "Beverages",
    "sub_category": "Coffee",
    "available_quantity": 6,
    "price": 327.18,
    "image_url": "https://cdn.o2vend.com/840e087a-a6ca-44e0-b5ca-ff41d3115911/9faf8b13-7e93-46ef-9826-26ae19345226.jpg",
    "type": "veg"
  },
  {
    "id": "4",
    "name": "Latte",
    "category": "Beverages",
    "sub_category": "Coffee",
    "available_quantity": 4,
    "price": 327.18,
    "image_url": "https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693",
    "type": "veg"
  },
  {
    "id": "5",
    "name": "Paneer Pizza",
    "category": "Food",
    "sub_category": "Pizza",
    "available_quantity": 10,
    "price": 737.18,
    "image_url": "https://foodoncall.co.in/wp-content/uploads/2017/10/chatpata-paneer-pizza.jpg",
    "type": "veg"
  },
  {
    "id": "6",
    "name": "Corn Pizza",
    "category": "Food",
    "sub_category": "Pizza",
    "available_quantity": 8,
    "price": 573.18,
    "image_url": "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/corn.f8baa08ad7f607f1de30f96bb9245b50.1.jpg",
    "type": "veg"
  },
  {
    "id": "7",
    "name": "Vegetable Pizza",
    "category": "Food",
    "sub_category": "Pizza",
    "available_quantity": 6,
    "price": 819.18,
    "image_url": "https://foods.qmanja.com/MenuImages/Menu5114-Mix-veg-pizza.jpg.png",
    "type": "veg"
  },
  {
    "id": "8",
    "name": "Chicken BBQ Pizza",
    "category": "Food",
    "sub_category": "Pizza",
    "available_quantity": 2,
    "price": 819.18,
    "image_url": "https://i0.wp.com/www.slapyodaddybbq.com/wp-content/uploads/BBQChickenPizza-foodgawker.jpg?fit=600%2C600&ssl=1",
    "type": "non-veg"
  },
  {
    "id": "9",
    "name": "Chicken Tandoori Pizza",
    "category": "Food",
    "sub_category": "Pizza",
    "available_quantity": 3,
    "price": 901.18,
    "image_url": "https://tastytango.blog/wp-content/uploads/2023/07/koolgurl._A_close-up_high_quality_photo_of_a_Tandoori_Fusion_De_2028d66f-ef2d-46ba-8ebd-41491e80ba4b.jpg",
    "type": "non-veg"
  },
  {
    "id": "10",
    "name": "Penne Alfredo",
    "category": "Food",
    "sub_category": "Pasta",
    "available_quantity": 8,
    "price": 737.18,
    "image_url": "https://www.spoonfulofflavor.com/wp-content/uploads/2023/12/alfredo-penne-pasta-500x375.jpg",
    "type": "veg"
  },
  {
    "id": "11",
    "name": "Pasta alla Norma",
    "category": "Food",
    "sub_category": "Pasta",
    "available_quantity": 6,
    "price": 819.18,
    "image_url": "https://www.themediterraneandish.com/wp-content/uploads/2020/12/pasta-alla-norma-recipe-6.jpg",
    "type": "veg"
  },
  {
    "id": "12",
    "name": "Pasta e fagioli",
    "category": "Food",
    "sub_category": "Pasta",
    "available_quantity": 1,
    "price": 573.18,
    "image_url": "https://www.saveur.com/uploads/2019/04/22/G3TIHE7ANJTO5EQGLDVLN4WIQA-768x1024.jpg?auto=webp&optimize=high&quality=70&width=1440",
    "type": "veg"
  },
  {
    "id": "13",
    "name": "Chicken Alfredo",
    "category": "Food",
    "sub_category": "Pasta",
    "available_quantity": 9,
    "price": 901.18,
    "image_url": "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/16:9/w_1280,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
    "type": "non-veg"
  },
  {
    "id": "14",
    "name": "Chicken Pesto Pasta",
    "category": "Food",
    "sub_category": "Pasta",
    "available_quantity": 10,
    "price": 819.18,
    "image_url": "https://therecipecritic.com/wp-content/uploads/2023/02/chickenpestopasta-1.jpg",
    "type": "non-veg"
  },
  {
    "id": "15",
    "name": "Chocolate Lava Cake",
    "category": "Food",
    "sub_category": "Dessert",
    "available_quantity": 10,
    "price": 573.18,
    "image_url": "https://floursandfrostings.com/wp-content/uploads/2017/01/IMG_20170104_003650_972-1.jpg",
    "type": "veg"
  },
  {
    "id": "16",
    "name": "Tiramisu",
    "category": "Food",
    "sub_category": "Dessert",
    "available_quantity": 8,
    "price": 819.18,
    "image_url": "https://www.cookingclassy.com/wp-content/uploads/2022/08/tiramisu-17.jpg",
    "type": "veg"
  },
  {
    "id": "17",
    "name": "Cheesecake",
    "category": "Food",
    "sub_category": "Dessert",
    "available_quantity": 3,
    "price": 901.18,
    "image_url": "https://www.jocooks.com/wp-content/uploads/2018/11/cheesecake-1-22.jpg",
    "type": "veg"
  },
  {
    "id": "18",
    "name": "Apple Pie",
    "category": "Food",
    "sub_category": "Dessert",
    "available_quantity": 8,
    "price": 819.18,
    "image_url": "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.jpg",
    "type": "veg"
  },
  {
    "id": "19",
    "name": "Chocolate Mousse",
    "category": "Food",
    "sub_category": "Dessert",
    "available_quantity": 4,
    "price": 901.18,
    "image_url": "https://bakerbynature.com/wp-content/uploads/2023/08/Easy-Chocolate-Mousse-Baker-by-Nature-12617-1-500x500.jpg",
    "type": "veg"
  },
  {
    "id": "20",
    "name": "Chocolate Milkshake",
    "category": "Food",
    "sub_category": "Milkshake",
    "available_quantity": 2,
    "price": 573.18,
    "image_url": "https://www.orchidsandsweettea.com/wp-content/uploads/2020/01/Peanut-Butter-Milkshake-4-of-4.jpg",
    "type": "veg"
  },
  {
    "id": "21",
    "name": "Vanilla Milkshake",
    "category": "Food",
    "sub_category": "Milkshake",
    "available_quantity": 3,
    "price": 501.18,
    "image_url": "https://pintsizedbaker.com/wp-content/uploads/2015/12/Vanilla-Shake-4.jpg.webp",
    "type": "veg"
  },
  {
    "id": "22",
    "name": "Strawberry Milkshake",
    "category": "Food",
    "sub_category": "Milkshake",
    "available_quantity": 8,
    "price": 573.18,
    "image_url": "https://www.justsotasty.com/wp-content/uploads/2018/05/Strawberry-Milkshake.jpg",
    "type": "veg"
  },
  {
    "id": "23",
    "name": "Oreo Milkshake",
    "category": "Food",
    "sub_category": "Milkshake",
    "available_quantity": 6,
    "price": 901.18,
    "image_url": "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg",
    "type": "veg"
  }
];


const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image_url} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price.toFixed(2)}</p>
          <p>Available: {product.available_quantity}</p>
          
          {product.available_quantity > 0 ? (
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          ) : (
            <button disabled>Out of Stock</button>
          )}
        </div>
      ))}
    </div>
  );
};

// Component for the cart
const Cart = ({ cartItems, onPlaceOrder }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span> - ₹{item.price.toFixed(2)}
            </div>
          ))}
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button onClick={onPlaceOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

// Component for displaying the order form
const OrderForm = ({ onSubmit, onCancel }) => {
  const [tableNumber, setTableNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (tableNumber && date && time) {
      onSubmit({ tableNumber, contactNumber, date, time });
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div className="order-form">
      <h2>Order Details</h2>
      <input
        type="text"
        placeholder="Table Number"
        value={tableNumber}
        onChange={(e) => setTableNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact Number (Optional)"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button onClick={handleSubmit}>Submit Order</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

// Component for displaying order history
const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orders.length === 0 ? <p>No orders placed yet.</p> : (
        <>
          {orders.map((order, index) => (
            <div key={index} className="order-item">
              <h3>Order on {order.date} at {order.time}</h3>
              <p>Table Number: {order.tableNumber}</p>
              {order.contactNumber && <p>Contact: {order.contactNumber}</p>}
              <ul>
                {order.items.map((item, idx) => (
                  <li key={idx}>{item.name} - ₹{item.price.toFixed(2)}</li>
                ))}
              </ul>
              <h4>Total: ₹{order.total.toFixed(2)}</h4>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

// Main App Component
function App() {
  const [cart, setCart] = useState([]);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (product) => {
    if (product.available_quantity > cart.filter(item => item.id === product.id).length) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      alert(`Only ${product.available_quantity} of ${product.name} available`);
    }
  };

  const placeOrder = () => {
    setIsOrdering(true);
  };

  const submitOrder = (orderDetails) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const newOrder = {
      ...orderDetails,
      items: cart,
      total,
    };
    setOrderHistory([...orderHistory, newOrder]);
    setCart([]); // Clear the cart
    setIsOrdering(false);
    alert("Order placed successfully!");
  };

  return (
    <div className="App">
      <h1>Product Menu</h1>
      <ProductList products={menuData} onAddToCart={addToCart} />
      <Cart cartItems={cart} onPlaceOrder={placeOrder} />
      {isOrdering && (
        <OrderForm onSubmit={submitOrder} onCancel={() => setIsOrdering(false)} />
      )}
      <OrderHistory orders={orderHistory} />
    </div>
  );
}

export default App;
