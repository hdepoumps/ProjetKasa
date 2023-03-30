import '../../style/Footer.css'
import logo_footer from '../../img/Logo_footer.svg'
function Footer() {
  return (
    <footer>
      <img className={"img_footer"} src={logo_footer} alt={"logo kasa"}/>
      <p className={"txt_footer"}>© 2020 Kasa. All rights reserved</p>
    </footer>

  )
}

export default Footer