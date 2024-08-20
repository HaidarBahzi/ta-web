import { createSignal } from "solid-js";


interface TextInputProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  defValue?: string;
  readOnly?: boolean;
  inputPlaceholder?: string;
}

export function TextInput(props: TextInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <input
        type={props.inputType ?? "text"}
        name={props.inputName}
        value={props.defValue}
        readOnly={props.readOnly ?? false}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        placeholder={props.inputPlaceholder}
        required
      />
    </>
  );
}

interface TextInputUpdateProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  value?: string;
}

export function TextInputUpdate(props: TextInputUpdateProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <input
        type={props.inputType ?? "text"}
        name={props.inputName}
        value={props.value}
        readOnly
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        required
      />
    </>
  );
}

interface WizardTextInputProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  defValue?: string;
  onChange: (name: string, value: string) => void;
  inputPlaceholder?: string;
}

export function WizardTextInput(props: WizardTextInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <input
        type={props.inputType ?? "text"}
        value={props.defValue}
        onInput={(e) => props.onChange(props.inputName!, e.currentTarget.value)}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        placeholder={props.inputPlaceholder}
        required
      />
    </>
  );
}

interface WizardTextAreaInputProps {
  labelText: string;
  inputName?: string;
  defValue?: string;
  onChange: (name: string, value: string) => void;
  inputPlaceholder?: string;
}

export function WizardTextAreaInput(props: WizardTextAreaInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <textarea
        value={props.defValue}
        onInput={(e) => props.onChange(props.inputName!, e.currentTarget.value)}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        placeholder={props.inputPlaceholder}
        required
      />
    </>
  );
}

interface LimitedTextInputProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  defValue?: string;
  minLength?: number;
  maxLength?: number;
  inputPlaceholder?: string;
}

export function LimitedTextInput(props: LimitedTextInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <input
        type={props.inputType ?? "text"}
        name={props.inputName}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.defValue}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        placeholder={props.inputPlaceholder}
        required
      />
    </>
  );
}

interface SearchTextInputProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  defValue?: string;
  inputPlaceholder?: string;
  showValue?: string;
  buttonPress: () => void;
}

export function SearchTextInput(props: SearchTextInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>

      <input
        type={props.inputType ?? "text"}
        name={props.inputName}
        readOnly
        value={props.defValue || ""}
        class="bg-gray-100 col-span-2 hidden text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        required
      />

      <button
        type="button"
        onClick={props.buttonPress}
        class={`btn flex !font-normal justify-start no-animation !min-h-4 !h-9 hover:bg-gray-200 border-none bg-gray-100 col-span-2 ${
          props.defValue == "" ? "text-gray-400" : "text-gray-900"
        } p-2.5 w-full text-xs rounded`}
      >
        {props.defValue == "" ? props.inputPlaceholder : props.showValue}
      </button>
    </>
  );
}

interface WizardLimitedTextInputProps {
  labelText: string;
  inputType?: string;
  inputName?: string;
  defValue?: string;
  minLength?: number;
  maxLength?: number;
  inputPlaceholder?: string;
  onChange: (name: string, value: string) => void;
}

export function WizardLimitedTextInput(props: WizardLimitedTextInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <input
        type={props.inputType ?? "text"}
        name={props.inputName}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.defValue}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        placeholder={props.inputPlaceholder}
        onInput={(e) => props.onChange(props.inputName!, e.currentTarget.value)}
        required
      />
    </>
  );
}

interface DateInputProps {
  labelText: string;
  inputName?: string;
  defValue?: string;
  handleChange?: (value: string) => void;
}

export function DateInput(props: DateInputProps) {
  const [inputType, setInputType] = createSignal("text");

  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>

      <input
        type={inputType()}
        required
        placeholder="DD/MM/YYYY"
        onFocus={() => setInputType("date")}
        onBlur={() => setInputType("text")}
        name={props.inputName}
        value={props.defValue}
        onInput={(e) => {
          const selectedValue = e.currentTarget.value;
          if (props.handleChange) {
            props.handleChange(selectedValue);
          }
        }}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
      />
    </>
  );
}

interface WizardDateInputProps {
  labelText: string;
  inputName?: string;
  defValue?: string;
  onChange?: (name: string, value: string) => void;
}

export function WizardDateInput(props: WizardDateInputProps) {
  const [inputType, setInputType] = createSignal("text");

  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>

      <input
        type={inputType()}
        required
        placeholder="DD/MM/YYYY"
        onFocus={() => setInputType("date")}
        onBlur={() => setInputType("text")}
        name={props.inputName}
        value={props.defValue}
        onInput={(e) => {
          const selectedValue = e.currentTarget.value;
          if (props.onChange) {
            props.onChange(props.inputName!, selectedValue);
          }
        }}
        class="bg-gray-100 w-full col-span-2 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
      />
    </>
  );
}

interface DropdownEditInputProps {
  labelText: string;
  inputName?: string;
  defaultValue?: string;
  optionTitle: string;
  optionValue: { value: string; title: string }[];
  handleChange?: (value: string) => void;
}

export function DropdownEditInput(props: DropdownEditInputProps) {
  return (
    <>
      <label class="text-xs w-fit font-normal text-gray-900">
        {props.labelText}
      </label>
      <select
        id="dropdown"
        class="bg-gray-100 w-full text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none"
        onChange={(e) => {
          const selectedValue = e.currentTarget.value;
          if (props.handleChange) {
            props.handleChange(selectedValue);
          }
        }}
      >
        <option selected>{props.defaultValue ?? "Select an option"}</option>
        {props.optionValue.map((val, index) => (
          <option value={val.value} selected={props.defaultValue === val.title}>
            {val.title}
          </option>
        ))}
      </select>
    </>
  );
}
