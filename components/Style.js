
import React from 'react'

const css = `
.color-inherit { color: inherit }
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
`

const Style = () => (
  <style dangerouslySetInnerHTML={{ __html: css }} />
)

export default Style
