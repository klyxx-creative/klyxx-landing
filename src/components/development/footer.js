import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles/footer.scss'

class DevelopmentFooter extends Component {
  render () {
    return (
      <div className="development-footer">
        <h3 className="footer-header">Drop us a line.</h3>
        <div className="footer-bar" />

        <p className="footer-description">
          We're based in Brooklyn, but work with companies from all over.
        </p>
        <Link to={'/'}>
          <a id={'developmentCtaButton'} href="https://klyxx.typeform.com/to/YuJ6xR">
              Say hello
          </a>
        </Link>
      </div>
    )
  }
}

export default DevelopmentFooter
