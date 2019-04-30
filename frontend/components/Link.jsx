import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

function Link ({
  as: Element,
  children,
  router,
  prefetch,
  href,
  activeClassName,
  className,
  ...props
}) {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  useEffect(() => {
    if (prefetch) {
      router.prefetch(href)
    }
  }, [])

  const buildClassName = () => {
    const klass = className

    if (router.pathname === href) {
      return `${klass} ${activeClassName}`.trim()
    }

    return klass
  }

  return (
    <Element {...props} href={href} className={buildClassName()} onClick={handleClick}>
      {children}
    </Element>
  )
}

Link.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  prefetch: PropTypes.bool,
  router: PropTypes.object.isRequired
}

Link.defaultProps = {
  as: 'a',
  className: '',
  activeClassName: '',
  href: '',
  prefetch: false
}

export default withRouter(Link)
