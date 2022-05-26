import { Link } from 'react-router-dom'
import { SocialProps } from './types/social'
import youtube from 'assets/images/youtube.svg'
import facebook from 'assets/images/facebook.svg'
import twitter from 'assets/images/twitter.svg'
import './social.component.scss'

const SocialComponent = (props: SocialProps) => {
  return (
    <div className={`social-icons ${props.className}`}>
      <Link to="#" className='social-icons_item'>
        <img src={youtube} alt="youtube" />
      </Link>
      <Link to="#" className='social-icons_item'>
        <img src={facebook} alt="facebook" />
      </Link>
      <Link to="#" className='social-icons_item'>
        <img src={twitter} alt="twitter" />
      </Link>
    </div>
  )
}

export default SocialComponent