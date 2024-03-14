import imgLogo from './img/logo.svg'
import './Logo.css'

function Logo() {
  return (
    <div className="Logo">
      <img src={imgLogo} alt="Logo" className="Logo_Img" />
    </div>
  )
}

export default Logo
