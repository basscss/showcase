
import React from 'react'
import { CarbonAd } from 'blk'
import Style from './Style'
import Index from './Index'

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
            <header className='clearfix'>
              <h1>Basscss Showcase</h1>
              <CarbonAd />
            </header>
            <Index {...this.props} />
          </div>
          {/*
          <Footer {...this.props} wide />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          */}
        </body>
      </html>
    )
  }

}

export default Root

