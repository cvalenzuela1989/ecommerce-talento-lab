export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

// Props que recibe el componente ListaProductos
export interface ListaProductosProps {
    productos: Producto[];
    onAgregarProducto: (producto: Producto) => void;
}

// Props que recibe el componente Producto
export interface ProductoProps {
    producto: Producto;
    onAgregar: (producto: Producto) => void;
}

// Props que recibe el componente Carrito
export interface CarritoProps {
    productosSeleccionados: Producto[];
    onVaciarCarrito: () => void;
}