import styles from './input.module.scss';

export default function Input({ name, value, onChange, id, label, required = false }) {
  return (
    <div className={required ? styles.inputRequired : styles.inputContainer}>
      <label>
        {label}
      </label>
      <textarea
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        rows={4}
        cols={50}
      />
    </div>
  )
}
