import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { InputProvider } from '@/components'
import { RouterLink } from '@/libs/router-link'
import { isAuthenticated } from '@/libs/auth-ssr'
import { authService } from '@/services/auth.service'
import { emailValidator } from '@/utils/validator'
import { FormLogin } from '@/types/forms'
import google from '@images/google.svg'

export default function LoginContainer() {
  // __STATE <React.Hooks>
  const router = useRouter()

  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<FormLogin>({
		defaultValues: {
			username: 'example@color.com',
			password: 'password',
      remember: false
		}
	})

  // __FUNCTIONS
  const submit = async (data: FormLogin): Promise<void> => {
    try {
      await authService.login(data)
      router.push('/browse')
    } catch (error) {
      alert(error.message)
    }
  }

  // __RENDER
  return (
    <div className='ui--login ui--router-view'>
      <div className='ui--login-body'>
        <form className='ui--login-form' onSubmit={handleSubmit(submit)}>
          <h2 className='title'>sign in</h2>

          <InputProvider
            key='.username'
            name='username'
            label='Username'
            icon='person'
            register={register}
            errors={errors.username}
            rules={{ required: true, pattern: emailValidator() }}
          />

          <InputProvider
            key='.password'
            type='password'
            name='password'
            label='Password'
            icon='lock'
            register={register}
            errors={errors.password}
            rules={{ required: true }}
          />

          <div className='ui--input'>
            <button type='submit' className='btn btn-login btn-primary'>
              <span className='icon bi bi-box-arrow-in-right'></span>
              <span className='text'>log in</span>
            </button>
          </div>

          <div className='help'>
            <InputProvider key='.remember' type='checkbox' name='remember' label='Remember me' register={register} />

            <a className='btn btn-default btn-help'>Need Help?</a>
          </div>
        </form>

        <div className='ui--login-other'>
          <div className='rows'>
            <button type='button' className='btn btn-default btn-google'>
              <img className='icon' src={google} />
              <span className='text'>Login with Google</span>
            </button>
          </div>

          <div className='rows'>
            <div className='register'>
              New to Color?{' '}
              <RouterLink className='link' href='/register'>
                Sign up now
              </RouterLink>
              .
            </div>
          </div>

          <div className='rows'>
            <p className='captcha'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = isAuthenticated
