import './Topbar.css'
import './Topbar-media.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="son-topbar">
      <span>Free Courses 🌟 Sale Ends Soon, Get It Now</span>
      <ArrowForwardIcon className='son-topbar-icon' style={{fontSize: 23}}/>
      </div>
    </div>
  )
}
