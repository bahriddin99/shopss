import './style.scss'
function index({children}:any) {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default index