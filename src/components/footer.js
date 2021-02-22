import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://oasisbusiness.co.kr/">Oasis Business</a>
      .
    </footer>
  )
}

export default Footer
