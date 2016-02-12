
import React from 'react'

class Index extends React.Component {

  render () {
    let cdn = this.props.cdn

    return (
      <div className='flex flex-wrap items-stretch mxn2 py3'>
        {this.props.sites.map(function(theme, i) {
          return (
            <div key={i}
              className='flex col-12 sm-col-6 md-col-4 lg-col-3 px2 mb4'>
              <a href={theme.url}
                target='_blank'
                className='block p1 color-inherit text-decoration-none hover-grow border rounded border-gray'>
                <img src={cdn + theme.image} />
                <h3 className='h4 mb0'>
                  {theme.title}
                </h3>
                <div className='h5'>
                  {theme.description}
                </div>
              </a>
            </div>
          )
        })}
      </div>
    )
  }

}

export default Index

