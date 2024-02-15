import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/appStore.js";
import { useClientActions } from "../hooks/clientsHooks.js";

const CreateNewBilling = () => {
  const selectedClient = useAppSelector(
    (state) => state.clientsReducer.selectedClient
  );
  const { addClient, modifyClient, clearCurrentClient } = useClientActions();
  const [result, setResult] = useState(null);
  const [client, setClient] = useState({});

  useEffect(() => {
    setClient(selectedClient);
  }, [selectedClient, selectedClient?._id]);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setClient({
      ...client,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const ruc = formData.get("ruc");
    const company_name = formData.get("company_name");
    const contact = formData.get("contact");
    const address = formData.get("address");
    const city = formData.get("city");
    const telephone = formData.get("telephone");
    const email = formData.get("email");

    if (
      !ruc ||
      !company_name ||
      !contact ||
      !address ||
      !city ||
      !telephone ||
      !email
    ) {
      return setResult("ko");
    }

    const newClient = {
      ruc,
      company_name,
      contact,
      address,
      city,
      telephone,
      email,
    };

    if (client?._id) {
      modifyClient({ ...newClient, _id: client?._id });
    } else {
      addClient(newClient);
    }
    form.reset();
    clearCurrentClient();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear Nuevo Cliente</Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          name="ruc"
          placeholder="Aquí el RUC"
          value={client?.ruc}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="company_name"
          placeholder="Aquí la razón social"
          value={client?.company_name}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="contact"
          placeholder="Aquí el contacto"
          value={client?.contact}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="address"
          placeholder="Aquí la dirección física"
          value={client?.address}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="city"
          placeholder="Aquí la ciudad"
          value={client?.city}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="telephone"
          placeholder="Aquí el teléfono"
          value={client?.telephone}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="email"
          placeholder="Aquí el email"
          value={client?.email}
          onChange={(event) => handleChange(event)}
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            {selectedClient?._id ? "Guardar cliente" : "Crear cliente"}
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

export default CreateNewBilling;
