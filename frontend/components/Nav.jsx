import React from 'react'

import Link from './Link'
import StyledNav from './styles/StyledNav'

const links = [
  { href: '/', label: 'Dinero' },
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

// const Nav = () => (
//   <nav>
//     <ul>
//       <li>
//         <Link prefetch href='/'>
//           <a>Home</a>
//         </Link>
//       </li>
//       <ul>
//         {links.map(({ key, href, label }) => (
//           <li key={key}>
//             <Link href={href}>
//               <a>{label}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </ul>

//     {/* <style jsx>{`
//       nav {
//         text-align: center;
//       }
//       ul {
//         display: flex;
//         justify-content: space-between;
//       }
//       nav > ul {
//         padding: 4px 16px;
//       }
//       li {
//         display: flex;
//         padding: 6px 8px;
//       }
//       a {
//         color: #067df7;
//         text-decoration: none;
//         font-size: 13px;
//       }
//     `}</style> */}
//   </nav>
// )

function Nav () {
  return (
    <StyledNav>
      {links.map(({ key, href, label }) => (
        <Link as='button' key={key} href={href} activeClassName='active'>
          {label}
        </Link>
      ))}
    </StyledNav>
  )
}

export default Nav