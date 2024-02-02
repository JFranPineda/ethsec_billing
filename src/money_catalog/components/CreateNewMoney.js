import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/appStore.js";
import { useMoneyCatalogActions } from "../hooks/moneyCatalogHooks.js";

const CreateNewMoney = () => {
  const selectedMoney = useAppSelector(
    (state) => state.moniesReducer.selectedMoney
  );
  const { addMoney, modifyMoney, clearCurrentMoney } = useMoneyCatalogActions();
  const [result, setResult] = useState(null);
  const [money, setMoney] = useState({});

  useEffect(() => {
    setMoney(selectedMoney);
  }, [selectedMoney, selectedMoney?._id]);

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setMoney({
      ...money,
      [field]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const currency = formData.get("currency");
    const symbol = formData.get("symbol");
    const description = formData.get("description");
    const exchange_value = Number(formData.get("exchange_value"));

    if (!currency || !symbol || !description || !exchange_value) {
      return setResult("ko");
    }

    const newMoney = {
      currency,
      symbol,
      description,
      exchange_value,
    };

    if (money?._id) {
      modifyMoney({ ...newMoney, _id: money?._id });
    } else {
      addMoney(newMoney);
    }
    form.reset();
    clearCurrentMoney();
  };

  return (
    <Card style={{ marginTop: "16px" }}>
      <Title>Crear Nueva Moneda</Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <TextInput
          name="currency"
          placeholder="Aquí el código de moneda"
          value={money?.currency}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="symbol"
          placeholder="Aquí el símbolo"
          value={money?.symbol}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="description"
          placeholder="Aquí la descripción"
          value={money?.description}
          onChange={(event) => handleChange(event)}
        />
        <TextInput
          name="exchange_value"
          placeholder="Aquí el tipo de cambio (S/.)"
          value={money?.exchange_value}
          onChange={(event) => handleChange(event)}
        />
        <div>
          <Button type="submit" style={{ marginTop: "16px" }}>
            {selectedMoney?._id ? "Guardar moneda" : "Crear moneda"}
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

export default CreateNewMoney;
