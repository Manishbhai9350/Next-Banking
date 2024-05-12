import AuthForm from "@/components/AuthForm"

const SignIn = () => {
  return (
    <section className='flex h-screen flex-col justify-center items-center flex-1'>
       <AuthForm type='sign-in' />
    </section>
  )
}

export default SignIn