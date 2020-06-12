const FilterBar = ({ options, onChangeFunction }) => (
  <section className="mx-auto filter-bar">
    <DateInput label="Entrada" onChangeFunction={onChangeFunction} />
    <DateInput label="Salida" onChangeFunction={onChangeFunction} />
    <SelectInput
      label="País"
      defaultPlaceholder="Cualquier país"
      iconName="fas fa-globe-americas"
      options={options.country}
      onChangeFunction={onChangeFunction}
    />
    <SelectInput
      label="Precio"
      defaultPlaceholder="Cualquier precio"
      iconName="fas fa-money-bill-wave"
      options={options.price}
      onChangeFunction={onChangeFunction}
    />
    <SelectInput
      label="Tamaño"
      defaultPlaceholder="Cualquier tamaño"
      iconName="fas fa-bed"
      options={options.size}
      onChangeFunction={onChangeFunction}
    />
  </section>
);
