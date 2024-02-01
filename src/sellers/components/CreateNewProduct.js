import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/appStore.js";
import { useProductActions } from "../hooks/productsHooks.js";

const CreateNewProduct = () => {
  const selectedProduct = useAppSelector(
    (state) => state.productsReducer.selectedProduct
  );
  const { addProduct, modifyProduct, clearCurrentProduct } =
    useProductActions();
  const [result, setResult] = useState(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(selectedProduct);
  }, [selectedProduct, selectedProduct?._id]);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setProduct({
      ...product,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const model = formData.get("model");
    const description = formData.get("description");
    const quantity = Number(formData.get("quantity"));
    const price_non_igv = Number(formData.get("price_non_igv"));
    const price_igv = Number(formData.get("price_igv"));
    const price_pen_non_igv = Number(formData.get("price_pen_non_igv"));
    const price_pen_igv = Number(formData.get("price_pen_igv"));

    if (
      !model ||
      !description ||
      !quantity ||
      !price_non_igv ||
      !price_igv ||
      !price_pen_non_igv ||
      !price_pen_igv
    ) {
      return setResult("ko");
    }

    const newProduct = {
      model,
      description,
      quantity,
      price_non_igv,
      price_igv,
      price_pen_non_igv,
      price_pen_igv,
    };

    if (product?._id) {
      modifyProduct({ ...newProduct, _id: product?._id });
    } else {
      addProduct(newProduct);
    }
    form.reset();
    clearCurrentProduct();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear Nuevo Producto</Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          name="model"
          placeholder="Aquí el modelo"
          value={product?.model}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="description"
          placeholder="Aquí la descripción"
          value={product?.description}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="quantity"
          placeholder="Aquí la cantidad en stock"
          value={product?.quantity}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="price_non_igv"
          placeholder="Aquí el precio en dólares (sin IGV)"
          value={product?.price_non_igv}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="price_igv"
          placeholder="Aquí el precio en dólares (con IGV)"
          value={product?.price_igv}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="price_pen_non_igv"
          placeholder="Aquí el precio en soles (sin IGV)"
          value={product?.price_pen_non_igv}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="price_pen_igv"
          placeholder="Aquí el precio en soles (con IGV)"
          value={product?.price_pen_igv}
          onChange={(event) => handleChange(event)}
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            {selectedProduct?._id ? "Guardar producto" : "Crear producto"}
          </Button>
          <span>
            {result === "ok" && (
              <Badge color="green">Guardado correctamente</Badge>
            )}
            {result === "ko" && <Badge color="red">Error con los campos</Badge>}
          </span>
        </div>
      </form>
    </Card>
  );
};

export default CreateNewProduct;
