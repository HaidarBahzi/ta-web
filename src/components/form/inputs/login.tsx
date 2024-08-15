import { FiEye, FiEyeOff } from "solid-icons/fi";
import { createSignal } from "solid-js";

interface InputLoginProps {
  error?: string;
}

export function InputIdLogin(props: InputLoginProps) {
  return (
    <div class="w-full form-control gap-2">
      <label class="text-xs font-normal text-gray-900">NIP</label>
      <input
        type="number"
        name="pegawaiNip"
        class={`bg-gray-100 text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none w-full ${
          props.error ? "border-red-500" : ""
        }`}
        placeholder="NIP Anda"
      />
      {props.error && <div class="text-red-500 text-xs">{props.error}</div>}
    </div>
  );
}

export function InputPasswordLogin(props: InputLoginProps) {
  const [showPassword, setShowPassword] = createSignal(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div class="form-control gap-2 w-full">
      <label class="text-xs font-normal text-gray-900">Password</label>

      <div class="relative col-span-2 w-full">
        <input
          type={showPassword() ? "text" : "password"}
          name="pegawaiPassword"
          class={`bg-gray-100 w-full text-gray-900 text-xs rounded focus:bg-gray-200 p-2.5 outline-none ${
            props.error ? "border-red-500" : ""
          }`}
          placeholder="Password Anda"
        />
        <button
          type="button"
          class="absolute top-0 right-2 h-full flex items-center justify-center p-2.5 text-slate-400"
          onClick={togglePasswordVisibility}
        >
          {showPassword() ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
      {props.error && <div class="text-red-500 text-xs">{props.error}</div>}
    </div>
  );
}
