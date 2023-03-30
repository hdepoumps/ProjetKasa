import '../../style/Banner.css'
function Banner(props) {
  const classes =`card_banner ${props.className}`
  return (
    <div className={classes} >
      <img src={props.image} alt={props.alt} />
    </div>
  )
}
export default Banner;