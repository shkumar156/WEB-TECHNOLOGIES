import mongoose from "mongoose";

const MenuItemsSchema = new mongoose.Schema({
        category: String,
        items: [String],
      });
      
      const MenuItems = mongoose.model('MenuItem', MenuItemsSchema);