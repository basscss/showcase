
import React from 'react'
import { CarbonAd } from 'blk'
import Style from './Style'
import Index from './Index'
import Header from './Header'
import Footer from './Footer'
import GA from './GA'

class Root extends React.Component {

  render () {
    const { title, description } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <meta name='description' content={description} />
          <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <link href='https://npmcdn.com/basscss@8.0.0-beta5/css/basscss.min.css' rel='stylesheet' />
          <Style />
        </head>
        <body>
          <div className='px3'>
            <Header />
            <Index {...this.props} />
            <Footer />
          </div>
          <GA />
        </body>
      </html>
    )
  }

}

export default Root

