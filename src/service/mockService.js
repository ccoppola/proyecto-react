import productos from "../data/productos";


const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};
  
const getItemByID = (itemID) => {
    return new Promise((resolve, reject) => {
        const reqItem = productos.find((item) => {
            return item.id === parseInt(itemID);
    });
        setTimeout(() => {
            if (reqItem) resolve(reqItem);
            else reject("No se encontró el producto");
        }, 2000);
    });
};
  
const getItemsByCategory = (categoria) => {
    return new Promise((resolve, reject) => {
        let reqItems = productos.filter((item) => item.category === categoria);
        setTimeout(() => {
            resolve(reqItems);
        }, 2000);
    });
};


export default getItems;

export { getItemByID, getItemsByCategory };
