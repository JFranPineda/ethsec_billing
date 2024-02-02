import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/appStore.js";
import { useSellerActions } from "../hooks/sellersHooks.js";

const CreateNewSeller = () => {
  const selectedSeller = useAppSelector(
    (state) => state.sellersReducer.selectedSeller
  );
  const { addSeller, modifySeller, clearCurrentSeller } = useSellerActions();
  const [result, setResult] = useState(null);
  const [seller, setSeller] = useState({});

  useEffect(() => {
    setSeller(selectedSeller);
  }, [selectedSeller, selectedSeller?._id]);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setSeller({
      ...seller,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const telephone = formData.get("telephone");
    const email = formData.get("email");

    if (!first_name || !last_name || !telephone || !email) {
      return setResult("ko");
    }

    const newSeller = {
      first_name,
      last_name,
      telephone,
      email,
    };

    if (seller?._id) {
      modifySeller({ ...newSeller, _id: seller?._id });
    } else {
      addSeller(newSeller);
    }
    form.reset();
    clearCurrentSeller();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear Nuevo Vendedor</Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          name="first_name"
          placeholder="Aquí los nombres"
          value={seller?.first_name}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="last_name"
          placeholder="Aquí los apellidos"
          value={seller?.last_name}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="telephone"
          placeholder="Aquí el teléfono"
          value={seller?.telephone}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="email"
          placeholder="Aquí el email"
          value={seller?.email}
          onChange={(event) => handleChange(event)}
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            {selectedSeller?._id ? "Guardar vendedor" : "Crear vendedor"}
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

export default CreateNewSeller;
