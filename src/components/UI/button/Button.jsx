// eslint-disable-next-line react/prop-types
const Button = ({text, href, btnClass}) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>
        {text}
    </a>
  )
}

export default Button