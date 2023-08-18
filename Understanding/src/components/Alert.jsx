import React from 'react'

export default function Alert(props) {
  const capitalized = (word) => {
    const theCase = word.toLowerCase()
    return theCase.charAt(0).toUpperCase() + theCase.slice(1)
  }
  return (
      props.alert && <div className={`alert alert-${props.alert.clrType} alert-dismissible fade show mb-0`} role="alert">
        <strong>{capitalized(props.alert.type)}</strong> : {capitalized(props.alert.message)}
    </div>
  )
}
