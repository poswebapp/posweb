import React from 'react'
import Input from '../utility/Input'

const Form = ({currentId, data}) => {
  return (
    <form className='w-[20rem] grid gap-3 h-auto p-4 place-content-start '>
    <h4 className='text-lg text-zinc-700'>{currentId ? "Update Good":"Upload Good"}</h4>
    <Input placeholder={"Name"} name={"gas"} value={data.name} type={"text"} />
    <Input placeholder={"Stock"} name={"stock"} value={data.stock} type={"text"} />
    <Input placeholder={"Unit"} name={"unit"} value={data.unit} type={"number"} />
    <Input placeholder={"Price"} name={"price"} value={data.price} type={"number"} />

    </form>
  )
}

export default Form
