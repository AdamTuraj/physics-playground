import debounce from "lodash.debounce";

const Setting = ({
  id,
  label,
  type,
  tooltip,
  defaultValue,
  step,
  updateSetting,
}: {
  id: string;
  label: string;
  type: string;
  tooltip: string;
  defaultValue: number | string;
  step?: number;
  updateSetting: (setting: string, value: string) => void;
}) => {
  const onChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      updateSetting(id, e.target.value),
    500
  );

  return (
    <div>
      <label htmlFor={id} data-tip={tooltip}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        step={step}
        onChange={onChange}
      />
    </div>
  );
};

export default Setting;
