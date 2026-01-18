import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
   <>
   <footer className="py-4 bg-dark text-white border-top border-secondary">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start mb-3 mb-md-0">
            
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small text-secondary">
              &copy; {currentYear} All Rights Reserved. 
              <span className="ms-2">
                Built with using React & Bootstrap
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer
