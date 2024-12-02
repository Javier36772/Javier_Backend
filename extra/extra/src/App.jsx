import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Auriculares Inalámbricos", price: 120, description: "Sonido de alta calidad" },
    { name: "Cargador Portátil", price: 45, description: "Compacto y potente" },
    { name: "Reloj Inteligente", price: 250, description: "Sigue tus metas de fitness" },
  ]);

  const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.description) {
      setProducts([...products, { ...newProduct, price: parseFloat(newProduct.price) }]);
      setNewProduct({ name: "", price: "", description: "" });
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f4f4f4" }}>
      <header style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Gestión de Productos</header>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese el nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Ingrese el precio del producto"
          value={newProduct.price}
          onChange={handleInputChange}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <input
          type="text"
          name="description"
          placeholder="Ingrese la descripción del producto"
          value={newProduct.description}
          onChange={handleInputChange}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <button
          onClick={addProduct}
          style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer" }}
        >
          Agregar Producto
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Nombre</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Precio</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left", backgroundColor: "#f2f2f2" }}>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{product.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>${product.price.toFixed(2)}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
