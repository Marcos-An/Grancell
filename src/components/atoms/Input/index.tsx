import styles from './input.module.scss';

export default function Input({ type = "text", id, onChange, name, value, label, required = false }) {
  return (
    <div className={required ? styles.inputRequired : styles.inputContainer}>
      <label>
        {label}
      </label>
      <input
        onChange={onChange}
        id={id}
        type={type}
        name={name}
        value={value}
      />
    </div>
  )
}
