import React,{useEffect} from 'react'

function LoginComponent({type, value, name,  children, id, errors,focus, handleChange}) {
  return (
        <div className="items-center md:items-center mb-6">
          <div>
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-12"
                htmlFor={id}>
                {children}
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                autoFocus={focus}
                className={`focus:border-purple-500 border-gray-200 bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white `}
                id={id}
                type={type}
                name = {name}
                vlaue={value}
                placeholder={value}
                onChange={handleChange}/>
            </div>
            </div>
            {errors && <div className="bg-red-200 w-64">{errors}</div>}
          </div>
    )
}

export default LoginComponent
