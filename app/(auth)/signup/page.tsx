import AuthForm from '@/components/AuthForm'

const SignUp = async () => {
  return (
    <section className='flex h-screen flex-col justify-center items-center flex-1'>
       <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp