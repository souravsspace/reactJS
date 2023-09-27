import { useEffect, useState } from "react"
import styles from "./select.module.css"

export type SelectOption = {
  value: number
  label: string
}

type MultipleSelectProps = {
  multiple: true
  value: SelectOption[]
  onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
  multiple?: false
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (MultipleSelectProps | SingleSelectProps)

export default function Select({
  multiple,
  value,
  onChange,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  const clearOptions = () => (multiple ? onChange([]) : onChange(undefined))

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((v) => v.value !== option.value))
      } else {
        onChange([...value, option])
      }
    } else {
      if (value?.value !== option.value) onChange(option)
    }
  }

  const isOptionSelected = (option: SelectOption) =>
    multiple ? value.includes(option) : value?.value === option.value

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((val) => (
              <button
                key={val.value}
                onClick={(e) => {
                  e.stopPropagation()
                  selectOption(val)
                }}
                className={styles["multiple-value"]}
              >
                {val.label}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation()
          clearOptions()
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={index}
            className={`
              ${styles.option} 
              ${isOptionSelected(option) ? styles.selected : ""}
              ${highlightedIndex === index ? styles.highlighted : ""}
            `}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
