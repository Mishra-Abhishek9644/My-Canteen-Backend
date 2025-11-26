import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

router.get("/load", async (req, res) => {
  try {
    await MenuItem.insertMany([

/* ⭐ SNACKS (10) */
{ name:"Veg Burger", price:55, category:"Snacks", image:"https://images.unsplash.com/photo-1607012672993-208c0dba0d8b", description:"Crispy veg patty & mayo" },
{ name:"Aloo Tikki Burger", price:60, category:"Snacks", image:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90", description:"Potato patty with mint mayo" },
{ name:"Cheese Sandwich", price:50, category:"Snacks", image:"https://images.unsplash.com/photo-1525351484163-7529414344d8", description:"Grilled cheese loaded" },
{ name:"Paneer Sandwich", price:70, category:"Snacks", image:"https://images.unsplash.com/photo-1625246333195-78d204e5b9be", description:"Soft paneer + cheese" },
{ name:"French Fries", price:45, category:"Snacks", image:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5", description:"Golden crispy fries" },
{ name:"Veg Puff", price:25, category:"Snacks", image:"https://images.unsplash.com/photo-1642681513641-e67e693c8cb7", description:"Crispy vegetable puff" },
{ name:"Samosa", price:15, category:"Snacks", image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0", description:"Classic potato samosa" },
{ name:"Bread Pakoda", price:35, category:"Snacks", image:"https://images.unsplash.com/photo-1668236524606-92a31aabaf06", description:"Stuffed & fried bread" },
{ name:"Cheesy Garlic Bread", price:80, category:"Snacks", image:"https://images.unsplash.com/photo-1627662236979-e9318c3eca52", description:"Cheesy garlic slice" },
{ name:"Paneer Kathi Roll", price:90, category:"Snacks", image:"https://images.unsplash.com/photo-1589307000270-94fb9dceb263", description:"Stuffed paneer roll" },

/* 🍕 PIZZA (6) */
{ name:"Margherita Pizza", price:120, category:"Pizza", image:"https://images.unsplash.com/photo-1548365328-94689e78c8e3", description:"Classic cheese base" },
{ name:"Veg Loaded Pizza", price:160, category:"Pizza", image:"https://images.unsplash.com/photo-1541745537412-3fc0ce01249b", description:"Veggies + cheese" },
{ name:"Farmhouse Pizza", price:180, category:"Pizza", image:"https://images.unsplash.com/photo-1576458085966-1b290a53ef54", description:"Capsicum, onion, corn" },
{ name:"Tandoori Paneer Pizza", price:190, category:"Pizza", image:"https://images.unsplash.com/photo-1513104890138-7c749659a591", description:"Spicy paneer topping" },
{ name:"Corn & Cheese Pizza", price:170, category:"Pizza", image:"https://images.unsplash.com/photo-1626200939802-5f05ad62c90f", description:"Cheesy corn overload" },
{ name:"Mexican Pizza", price:200, category:"Pizza", image:"https://images.unsplash.com/photo-1604382354936-07c5f2997862", description:"Beans + jalapeno" },

/* 🍜 CHINESE (7) */
{ name:"Veg Hakka Noodles", price:80, category:"Chinese", image:"https://images.unsplash.com/photo-1585036562204-6e4b0c32a33a", description:"Street style noodles" },
{ name:"Schezwan Noodles", price:90, category:"Chinese", image:"https://images.unsplash.com/photo-1668236773550-4a74f2de913b", description:"Spicy red noodles" },
{ name:"Veg Fried Rice", price:75, category:"Chinese", image:"https://images.unsplash.com/photo-1657299176883-1e7886934b5b", description:"Light & flavourful" },
{ name:"Paneer Fried Rice", price:100, category:"Chinese", image:"https://images.unsplash.com/photo-1671308509452-4374c76fe8ae", description:"Paneer loaded rice" },
{ name:"Veg Manchurian Gravy", price:90, category:"Chinese", image:"https://images.unsplash.com/photo-1657298848319-5f889a4185c8", description:"Perfect with rice" },
{ name:"Chilli Paneer Dry", price:130, category:"Chinese", image:"https://images.unsplash.com/photo-1631515240095-6473e94bf1fb", description:"Spicy paneer bites" },
{ name:"Spring Roll", price:70, category:"Chinese", image:"https://images.unsplash.com/photo-1629386473436-48de34c2c905", description:"Crispy veggie roll" },

/* 🥘 SOUTH INDIAN (6) */
{ name:"Masala Dosa", price:90, category:"South Indian", image:"https://images.unsplash.com/photo-1630383241307-10cf9c3142e8", description:"Aloo masala stuffed" },
{ name:"Plain Dosa", price:70, category:"South Indian", image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc", description:"Classic & crispy" },
{ name:"Idli Sambar", price:60, category:"South Indian", image:"https://images.unsplash.com/photo-1615621283197-e5f1c814a702", description:"Soft idli platter" },
{ name:"Vada Sambar", price:70, category:"South Indian", image:"https://images.unsplash.com/photo-1603899122420-8aec85d73f39", description:"Crispy vada bowl" },
{ name:"Onion Uttapam", price:85, category:"South Indian", image:"https://images.unsplash.com/photo-1596797038530-9f647fbb9a6a", description:"Soft & thick uttapam" },
{ name:"Rava Dosa", price:95, category:"South Indian", image:"https://images.unsplash.com/photo-1630383241534-892c7781d78b", description:"Rava crispy sheet" },

/* 🍢 STREET FOOD (5) */
{ name:"Pav Bhaji", price:80, category:"Street Food", image:"https://images.unsplash.com/photo-1630383241462-ea26ebd7d0ff", description:"Mumbai style buttery" },
{ name:"Chole Bhature", price:110, category:"Street Food", image:"https://images.unsplash.com/photo-1616560724690-c9e69cff7785", description:"Spicy chole + bhature" },
{ name:"Aloo Paratha", price:50, category:"Street Food", image:"https://images.unsplash.com/photo-1615184697888-e84bb0a79e7c", description:"Served with curd" },
{ name:"Maggi Masala", price:40, category:"Street Food", image:"https://images.unsplash.com/photo-1657298837947-247dcae0d36e", description:"2 min magic" },
{ name:"Paneer Tikka", price:140, category:"Street Food", image:"https://images.unsplash.com/photo-1599305090598-fe9d15d1a05c", description:"Grilled paneer skewers" },

/* 🍰 DESSERTS (6) */
{ name:"Gulab Jamun", price:50, category:"Dessert", image:"https://images.unsplash.com/photo-1617113448751-f462d6cbac54", description:"Warm & melt in mouth" },
{ name:"Chocolate Brownie", price:120, category:"Dessert", image:"https://images.unsplash.com/photo-1590086782792-42dd2350140d", description:"Rich fudgy brownie" },
{ name:"Ice Cream (2 Scoops)", price:60, category:"Dessert", image:"https://images.unsplash.com/photo-1589710752409-c6f1c4b564fd", description:"Vanilla / Chocolate" },
{ name:"Fruit Custard", price:70, category:"Dessert", image:"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445", description:"Chilled creamy fruit" },
{ name:"Red Velvet Slice", price:95, category:"Dessert", image:"https://images.unsplash.com/photo-1589302168068-1a59391da3e3", description:"Premium bakery cake" },
{ name:"Chocolate Donut", price:55, category:"Dessert", image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187", description:"Choco glazed donut" },

/* 🥤 DRINKS (10) */
{ name:"Cold Coffee", price:70, category:"Drinks", image:"https://images.unsplash.com/photo-1545491717-8fd45f1d495d", description:"Frosty café blend" },
{ name:"Oreo Shake", price:90, category:"Drinks", image:"https://images.unsplash.com/photo-1626202247921-ff4541e4b14b", description:"Thick Oreo shake" },
{ name:"KitKat Shake", price:95, category:"Drinks", image:"https://images.unsplash.com/photo-1506629082955-511b1aa562c8", description:"Crunchy chocolate mix" },
{ name:"Vanilla Milkshake", price:80, category:"Drinks", image:"https://images.unsplash.com/photo-1573998154797-20ca6f29aee6", description:"Smooth vanilla" },
{ name:"Chocolate Shake", price:85, category:"Drinks", image:"https://images.unsplash.com/photo-1626808642875-0aa545482dfb", description:"Thick chocolate blend" },
{ name:"Fresh Lemon Soda", price:40, category:"Drinks", image:"https://images.unsplash.com/photo-1593282409456-c6f113ab3a73", description:"Refreshing fizzy mint" },
{ name:"Jeera Masala Soda", price:45, category:"Drinks", image:"https://images.unsplash.com/photo-1551024709-8f23befc6cf7", description:"Tangy digestive drink" },
{ name:"Hot Coffee", price:30, category:"Drinks", image:"https://images.unsplash.com/photo-1511920170033-f8396924c348", description:"Hot filter coffee" },
{ name:"Masala Chai", price:20, category:"Drinks", image:"https://images.unsplash.com/photo-1583337130417-3346a1be7dee", description:"Perfect Indian chai" },
{ name:"Coca-Cola (250ml)", price:35, category:"Drinks", image:"https://images.unsplash.com/photo-1613470208054-8c6c8f1dbd1c", description:"Chilled coke bottle" },

/* 🔥 COMBOS (12) */
{ name:"Burger + Coke Combo", price:99, category:"Combo", image:"https://images.unsplash.com/photo-1613470208054-8c6c8f1dbd1c" },
{ name:"Pizza + Coke Combo", price:189, category:"Combo", image:"https://images.unsplash.com/photo-1576458085966-1b290a53ef54" },
{ name:"Sandwich + Fries + Shake", price:179, category:"Combo", image:"https://images.unsplash.com/photo-1525351484163-7529414344d8" },
{ name:"Noodles + Manchurian Combo", price:159, category:"Combo", image:"https://images.unsplash.com/photo-1657298848319-5f889a4185c8" },
{ name:"Dosa Breakfast Combo", price:129, category:"Combo", image:"https://images.unsplash.com/photo-1630383241307-10cf9c3142e8" },
{ name:"South Indian Thali", price:160, category:"Combo", image:"https://images.unsplash.com/photo-1615621283197-e5f1c814a702" },
{ name:"Chole Bhature + Lassi", price:145, category:"Combo", image:"https://images.unsplash.com/photo-1616560724690-c9e69cff7785" },
{ name:"Maggi + Chai Combo", price:65, category:"Combo", image:"https://images.unsplash.com/photo-1657298837947-247dcae0d36e" },
{ name:"Brownie + Ice Cream", price:120, category:"Combo", image:"https://images.unsplash.com/photo-1590086782792-42dd2350140d" },
{ name:"Chinese Meal Box", price:199, category:"Combo", image:"https://images.unsplash.com/photo-1657299176883-1e7886934b5b" },
{ name:"Mega Party Combo", price:399, category:"Combo", image:"https://images.unsplash.com/photo-1548365328-94689e78c8e3" },
{ name:"Date Night Platter", price:299, category:"Combo", image:"https://images.unsplash.com/photo-1604382354936-07c5f2997862" },

]);

    res.send("🔥 Menu Seeded Successfully! All 50 Items + 12 Combo Added");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
