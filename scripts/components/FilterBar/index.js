const FilterBar = ({ options }) => (
  <section className="mx-auto filter-bar">
    <DateInput label="Entrada" />
    <DateInput label="Salida" />
    <SelectInput
      label="País"
      defaultPlaceholder="Cualquier país"
      iconName="fas fa-globe-americas"
      options={options.country}
    />
    <SelectInput
      label="Precio"
      defaultPlaceholder="Cualquier precio"
      iconName="fas fa-money-bill-wave"
      options={options.price}
    />
    <SelectInput
      label="Tamaño"
      defaultPlaceholder="Cualquier tamaño"
      iconName="fas fa-bed"
      options={options.size}
    />
  </section>
);
