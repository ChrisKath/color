import { useForm } from 'react-hook-form'
import { InputProvider } from '@/components'
import { RouterLink } from '@/libs/router-link'
import { isAuthenticated } from '@/libs/auth-ssr'
import { userService } from '@/services/user.service'
import { emailValidator } from '@/utils/validator'
import { dialog } from '@/utils/function'
import { FormRegister } from '@/types/forms'
import './style.scss'

export default function RegisterContainer() {
  // __STATE <React.Hooks>
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm<FormRegister>({
		defaultValues: {
			email: 'example@color.com',
			password: 'password'
		}
	})

  // __FUNCTIONS
  const submit = async (data: FormRegister): Promise<void> => {
    try {
      await userService.register(data)
      dialog({
        title: 'Success',
        message: 'Register Successfully'
      })
    } catch (error) {
      dialog({ message: error.message })
    }
  }

  // __RENDER
  return (
    <div className='ui--register router-view'>
      <form className='ui--register-form' onSubmit={handleSubmit(submit)}>
        <h2 className='title'>sign up</h2>
        <h4 className='desc'>
          Just a few more steps and you're done!
          <br />
          We hate paperwork, too.
        </h4>

        <InputProvider
          key='.email'
          name='email'
          label='Email Address'
          icon='person'
          register={register}
          errors={errors.email}
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

        <div className='ui--input-provider'>
          <button type='submit' className='btn btn-submit btn-primary'>
            <span className='icon bi bi-box-arrow-in-right'></span>
            <span className='text'>sign up</span>
          </button>
        </div>
      </form>

      <div className='ui--register-other'>
        &larr; Back to{' '}
        <RouterLink className='link' href='/login'>
          Sign In
        </RouterLink>
      </div>
    </div>
  )
}

export const getServerSideProps = isAuthenticated
