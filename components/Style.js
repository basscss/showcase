
import React from 'react'

const css = `
.color-inherit { color: inherit }
@media screen and (min-width: 96em) {
  .xl-col-3 { width: 25% }
  .xl-col-2 { width: 16.667% }
}
.hover-grow {
  position: relative;
  transition: transform .125s ease-out;
}
.hover-grow::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, .375);
  opacity: .2;
  transition: opacity .125s ease-out;
}
.hover-grow:hover {
  transform: scale(1.03125);
  z-index: 2;
}
.hover-grow:hover::after {
  opacity: 1;
}
.border-gray { border-color: #ddd }

#carbonads {
  display: inline-block;
  font-size: 14px;
  line-height: 1.25;
  text-align: left;
}

#carbonads a,
#carbonads a:hover {
  text-decoration: none;
  color: inherit;
}

#carbonads span { display: block }

#carbonads > span::before,
#carbonads > span::after {
  content: '';
  display: table;
}

#carbonads > span::after {
  clear: both;
}

.carbon-img {
  float: left;
  margin-right: .5em;
}

.carbon-img > img { display: block }
.carbon-text { overflow: hidden }

.carbon-poweredby {
  float: left;
  margin-top: .25em;
  opacity: 0.5;
}

@media (min-width: 40em) {
  #carbonads {
    max-width: 320px;
  }
}

`

const Style = () => (
  <style dangerouslySetInnerHTML={{ __html: css }} />
)

export default Style
