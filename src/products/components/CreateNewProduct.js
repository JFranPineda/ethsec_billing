import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useProductActions } from "../hooks/productsHooks.js";

export function CreateNewProduct() {
  const { addProduct } = useProductActions();
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(null);

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

    addProduct({
      model,
      description,
      quantity,
      price_non_igv,
      price_igv,
      price_pen_non_igv,
      price_pen_igv,
    });
    setResult("ok");
    form.reset();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear Nuevo Product</Title>

      <form onSubmit={(event) => handleSubmit(event)} className="">
        <TextInput name="model" placeholder="Aquí el modelo" />
        <TextInput name="description" placeholder="Aquí la descripción" />
        <TextInput name="quantity" placeholder="Aquí la cantidad en stock" />
        <TextInput
          name="price_non_igv"
          placeholder="Aquí el precio en dólares (sin IGV)"
        />
        <TextInput
          name="price_igv"
          placeholder="Aquí el precio en dólares (con IGV)"
        />
        <TextInput
          name="price_pen_non_igv"
          placeholder="Aquí el precio en soles (sin IGV)"
        />
        <TextInput
          name="price_pen_igv"
          placeholder="Aquí el precio en soles (con IGV)"
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            Crear producto
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
}
