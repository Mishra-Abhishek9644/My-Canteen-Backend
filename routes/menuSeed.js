import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

router.get("/load", async (req, res) => {
  try {
    await MenuItem.insertMany([

/* ⭐ SNACKS (10) */
{ name:"Veg Burger", price:55, category:"Snacks", image:"https://i.imgur.com/UHjvKyk.png", description:"Crispy veg patty & mayo" },
{ name:"Aloo Tikki Burger", price:60, category:"Snacks", image:"https://i.imgur.com/jYVElbC.png", description:"Potato patty with mint mayo" },
{ name:"Cheese Sandwich", price:50, category:"Snacks", image:"https://i.imgur.com/lqrXK7a.png", description:"Grilled cheese loaded" },
{ name:"Paneer Sandwich", price:70, category:"Snacks", image:"https://i.imgur.com/WK62c62.png", description:"Soft paneer + cheese" },
{ name:"French Fries", price:45, category:"Snacks", image:"https://i.imgur.com/WIVQaE2.png", description:"Golden salted fries" },
{ name:"Veg Puff", price:25, category:"Snacks", image:"https://i.imgur.com/QCSO1bn.png", description:"Crispy bakery puff" },
{ name:"Samosa", price:15, category:"Snacks", image:"https://i.imgur.com/0Zr6srm.png", description:"Classic potato samosa" },
{ name:"Bread Pakoda", price:35, category:"Snacks", image:"https://i.imgur.com/rluYdMJ.png", description:"Stuffed & deep fried bread" },
{ name:"Cheesy Garlic Bread", price:80, category:"Snacks", image:"https://i.imgur.com/RhqEiVh.png", description:"Crusty & cheesy" },
{ name:"Paneer Kathi Roll", price:90, category:"Snacks", image:"https://i.imgur.com/CmCOUMt.png", description:"Stuffed paneer roll" },

/* 🍕 PIZZA (6) */
{ name:"Margherita Pizza", price:120, category:"Pizza", image:"https://i.imgur.com/4qDAb6W.png", description:"Classic cheese base" },
{ name:"Veg Loaded Pizza", price:160, category:"Pizza", image:"https://i.imgur.com/SdSHFFV.png", description:"Olives, corn, capsicum" },
{ name:"Farmhouse Pizza", price:180, category:"Pizza", image:"https://i.imgur.com/dYqBOYy.png", description:"Mushroom + onion + capsicum" },
{ name:"Tandoori Paneer Pizza", price:190, category:"Pizza", image:"https://i.imgur.com/ZeI1zxu.png", description:"Spicy paneer blast" },
{ name:"Corn & Cheese Pizza", price:170, category:"Pizza", image:"https://i.imgur.com/KH58uGF.png", description:"Corn overload" },
{ name:"Mexican Pizza", price:200, category:"Pizza", image:"https://i.imgur.com/e4oWk0a.png", description:"Beans + chili + jalapeno" },

/* 🍜 CHINESE (7) */
{ name:"Veg Hakka Noodles", price:80, category:"Chinese", image:"https://i.imgur.com/8EsyzY5.png", description:"Classic tawa noodles" },
{ name:"Schezwan Noodles", price:90, category:"Chinese", image:"https://i.imgur.com/wbB9lYn.png", description:"Spicy red sauce noodles" },
{ name:"Veg Fried Rice", price:75, category:"Chinese", image:"https://i.imgur.com/w3T2jw4.png", description:"Indo-Chinese style" },
{ name:"Paneer Fried Rice", price:100, category:"Chinese", image:"https://i.imgur.com/bEAsn6n.png", description:"Paneer chunks added" },
{ name:"Veg Manchurian Gravy", price:90, category:"Chinese", image:"https://i.imgur.com/vxo7nk9.png", description:"Perfect meal combo" },
{ name:"Chilli Paneer Dry", price:130, category:"Chinese", image:"https://i.imgur.com/cZhyc0m.png", description:"Paneer tossed in sauce" },
{ name:"Spring Roll", price:70, category:"Chinese", image:"https://i.imgur.com/mPlpNfq.png", description:"Crispy fried rolls" },

/* 🥘 SOUTH INDIAN (6) */
{ name:"Masala Dosa", price:90, category:"South Indian", image:"https://i.imgur.com/3cWPjyX.png", description:"Crispy & filled dosa" },
{ name:"Plain Dosa", price:70, category:"South Indian", image:"https://i.imgur.com/PsgKwsw.png", description:"Golden plain dosa" },
{ name:"Idli Sambar", price:60, category:"South Indian", image:"https://i.imgur.com/NtJm3B6.png", description:"Soft idli platter" },
{ name:"Vada Sambar", price:70, category:"South Indian", image:"https://i.imgur.com/AqOy8Zj.png", description:"Medu vada + sambar" },
{ name:"Onion Uttapam", price:85, category:"South Indian", image:"https://i.imgur.com/AV6972k.png", description:"Thick uttapam delight" },
{ name:"Rava Dosa", price:95, category:"South Indian", image:"https://i.imgur.com/fiBl5jT.png", description:"Crispy rava delight" },

/* 🍢 STREET FOOD (5) */
{ name:"Pav Bhaji", price:80, category:"Street Food", image:"https://i.imgur.com/NP4HvYV.png", description:"Mumbai-style bhaji" },
{ name:"Chole Bhature", price:110, category:"Street Food", image:"https://i.imgur.com/NoNO0My.png", description:"Big bhatura set" },
{ name:"Aloo Paratha", price:50, category:"Street Food", image:"https://i.imgur.com/KStEkas.png", description:"Served with curd" },
{ name:"Maggi Masala", price:40, category:"Street Food", image:"https://i.imgur.com/Urrv1Ma.png", description:"2-min classic" },
{ name:"Paneer Tikka", price:140, category:"Street Food", image:"https://i.imgur.com/iWZgDBs.png", description:"Charcoal grilled bites" },

/* 🍰 DESSERTS (6) */
{ name:"Gulab Jamun", price:50, category:"Dessert", image:"https://i.imgur.com/rdgLAkE.png", description:"Soft & juicy 2pc" },
{ name:"Chocolate Brownie", price:120, category:"Dessert", image:"https://i.imgur.com/7QYlXPd.png", description:"Warm gooey brownie" },
{ name:"Ice Cream (2 Scoops)", price:60, category:"Dessert", image:"https://i.imgur.com/gbFpxyP.png", description:"Vanilla/Choco" },
{ name:"Fruit Custard", price:70, category:"Dessert", image:"https://i.imgur.com/kjw9oYp.png", description:"Seasonal fruits mix" },
{ name:"Red Velvet Slice", price:95, category:"Dessert", image:"https://i.imgur.com/LVllGW5.png", description:"Premium cake slice" },
{ name:"Chocolate Donut", price:55, category:"Dessert", image:"https://i.imgur.com/97I6yIp.png", description:"Choco glaze donut" },

/* 🥤 DRINKS (10) */
{ name:"Cold Coffee", price:70, category:"Drinks", image:"https://i.imgur.com/Rft9rmx.png", description:"Cafe-style cold coffee" },
{ name:"Oreo Shake", price:90, category:"Drinks", image:"https://i.imgur.com/qFQD9EC.png", description:"Thick Oreo blend" },
{ name:"KitKat Shake", price:95, category:"Drinks", image:"https://i.imgur.com/phfVhXb.png", description:"Chocolate loaded" },
{ name:"Vanilla Milkshake", price:80, category:"Drinks", image:"https://i.imgur.com/sqH1kJU.png", description:"Classic smooth shake" },
{ name:"Chocolate Shake", price:85, category:"Drinks", image:"https://i.imgur.com/MqrfCg3.png", description:"Choco-rich drink" },
{ name:"Fresh Lemon Soda", price:40, category:"Drinks", image:"https://i.imgur.com/94wRamS.png", description:"Mint + lemon fizzy" },
{ name:"Jeera Masala Soda", price:45, category:"Drinks", image:"https://i.imgur.com/5JkxEFY.png", description:"Refreshing tangy drink" },
{ name:"Hot Coffee", price:30, category:"Drinks", image:"https://i.imgur.com/eP5k0AD.png", description:"Strong filter blend" },
{ name:"Masala Chai", price:20, category:"Drinks", image:"https://i.imgur.com/y27oCQt.png", description:"Perfect morning tea" },
{ name:"Coca-Cola (250ml)", price:35, category:"Drinks", image:"https://i.imgur.com/nrz5ldn.png", description:"Chilled soft drink" },

/* 🔥 HOME PAGE FEATURE COMBO DEALS (12) */

{
  name:"Burger + Coke Combo", price:99, category:"Combo", isCombo:true,
  itemsIncluded:["Veg Burger","Coca-Cola"],
  image:"https://i.imgur.com/L8X9dVS.png", description:"Perfect quick meal"
},
{
  name:"Pizza + Coke Combo", price:189, category:"Combo", isCombo:true,
  itemsIncluded:["Cheese Pizza","Cold Drink"],
  image:"https://i.imgur.com/zN9UN6s.png", description:"Evening special"
},
{
  name:"Sandwich + Fries + Shake", price:179, category:"Combo", isCombo:true,
  itemsIncluded:["Cheese Sandwich","French Fries","Oreo Shake"],
  image:"https://i.imgur.com/OPK1poA.png", description:"Top seller!"
},
{
  name:"Noodles + Manchurian Combo", price:159, category:"Combo", isCombo:true,
  itemsIncluded:["Veg Hakka Noodles","Manchurian Gravy"],
  image:"https://i.imgur.com/VgM9xOv.png"
},
{
  name:"Dosa Breakfast Combo", price:129, category:"Combo", isCombo:true,
  itemsIncluded:["Masala Dosa","Filter Coffee"],
  image:"https://i.imgur.com/1sCzMnY.png"
},
{
  name:"South Indian Thali", price:160, category:"Combo", isCombo:true,
  itemsIncluded:["Idli","Vada","Mini Dosa","Sambar"],
  image:"https://i.imgur.com/B4Y9SmE.png"
},
{
  name:"Chole Bhature + Lassi", price:145, category:"Combo", isCombo:true,
  itemsIncluded:["Chole Bhature","Sweet Lassi"],
  image:"https://i.imgur.com/f5wYBf4.png"
},
{
  name:"Maggi + Chai Hosteller Combo", price:65, category:"Combo", isCombo:true,
  itemsIncluded:["Masala Maggi","Masala Chai"],
  image:"https://i.imgur.com/PYMqZkW.png"
},
{
  name:"Brownie + Ice Cream", price:120, category:"Combo", isCombo:true,
  itemsIncluded:["Chocolate Brownie","Vanilla Scoop"],
  image:"https://i.imgur.com/lz4hdzp.png"
},
{
  name:"Full Chinese Meal Box", price:199, category:"Combo", isCombo:true,
  itemsIncluded:["Fried Rice","Manchurian","Spring Roll"],
  image:"https://i.imgur.com/pxIG0mc.png"
},
{
  name:"Mega Party Combo", price:399, category:"Combo", isCombo:true,
  itemsIncluded:["2 Pizzas","2 Burgers","4 Cokes"],
  image:"https://i.imgur.com/O25JpAh.png"
},
{
  name:"Date Night Platter 🍷🤍", price:299, category:"Combo", isCombo:true,
  itemsIncluded:["Mexican Pizza","KitKat Shake","Brownie"],
  image:"https://i.imgur.com/miu4xqe.png"
},

]);


    res.send("🔥 Menu Seeded Successfully! All 50 Items + 12 Combo Added");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
