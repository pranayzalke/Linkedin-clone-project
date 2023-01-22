import React from 'react'
import "./Widget.css"
import InfoIcon from '@material-ui/icons/Info';

function Widget() {
  return (
    <div className='widget'>
        <div className='widget_top'>
            <div className='widget_header'>
                <h4>Linkedin News</h4>
                <InfoIcon/>
            </div>
            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>The 25 fastest-growing jobs in India</h4>
                        <p>6d ago * 4,555 readers</p>
                    </li>
                    <li>
                        <h4>A two Pizza rule for eating</h4>
                        <p>2d ago * 5,254 readers</p>
                    </li>
                    <li>
                        <h4>Slaying Job Search Fees</h4>
                        <p>7d ago * 1,254 readers</p>
                    </li>
                    <li>
                        <h4>PepsiCo to hire 1,200</h4>
                        <p>3d ago * 5,254 readers</p>
                    </li>
                </ul>

            </div>
        </div>
      

        <div className='widget_bottom'>
            <div className='widget_header'>
                <h4>Today's top courses</h4>
                <InfoIcon/>
            </div>
            <div className='widget_body'>
                <ul className='widget_options'>
                    <li>
                        <h4>Leading with a Heavy heat</h4>
                        <p>Kay coly</p>
                    </li>
                    <li>
                        <h4>A two Pizza rule for eating</h4>
                        <p>2d ago * 5,254 readers</p>
                    </li>
                    <li>
                        <h4>A two Pizza rule for eating</h4>
                        <p>2d ago * 5,254 readers</p>
                    </li>
                    <li>
                        <h4>A two Pizza rule for eating</h4>
                        <p>2d ago * 5,254 readers</p>
                    </li>
                </ul>

            </div>
        </div>


    </div>
  )
}

export default Widget
