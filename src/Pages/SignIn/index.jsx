import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'

function SignIn() {
  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className="flex justify-center">
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>Camilin@gmail.com</span>
        </p>
        <p>
          <span className='font-light text-sm'>Password: </span>
          <span>******</span>
        </p>
      </div>
      SignIn
    </Layout>
  )
}

export default SignIn