import { Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { LoginSchema } from "../../../../validation/login-schema" 

import Button from "../../../../components/Button"
import Separator from "../../../../components/Separator"
import Icon from "../../../../components/Icon"
import Input from "../../../../components/Input"
import './SignIn.css'
import { AiFillFacebook } from "react-icons/ai";


const SignIn = ()=>{
    return(
      <div className="grid place-content-start md:place-content-center justify-center flex items-center mt-32">
        <div className="w-[350px] grid gap-y-2.5">
          <div className="gradient-pink px-[40px] pt-10 pb-2 rounded-lg">
            <div className="flex justify-center pb-6">
              <h1 className="text-2xl font-bold text-white">kavun</h1>
            </div>

            <Formik
              validationSchema={LoginSchema}
              initialValues={{
                username: "",
                password: "",
              }}
            //   onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty, values }) => (
                <Form className="grid gap-y-1.5">
                  <Input
                    name="username"
                    label="Phone number, username or email"
                  />
                  <Input type="password" name="password" label="Password" />

                  <Button
                    type="submit"
                    disabled={!isValid || !dirty || isSubmitting}
                  >
                    Log In
                  </Button>

                  <Separator label="OR" />
                  <a
                    href="#"
                    className="flex justify-center items-center gap-x-2 text-sm font-semibold text-blue-900"
                  >
                    <AiFillFacebook size={20} /> 
                    Log in with Facebook
                  </a>
                  <a
                    href="#"
                    className="text-xs flex items-center justify-center text-link mt-3 pb-4"
                  >
                    Forgotten your password?
                  </a>
                </Form>
              )}
            </Formik>
          </div>

          <div className="gradient-purple rounded-lg p-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/kavun/auth/register" className="font-semibold text-brand">
              Sign up
            </Link>
          </div>
        </div>
        </div>
    )
}
export default SignIn