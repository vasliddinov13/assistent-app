import React, { useContext, useState } from 'react'
import View from './View';
import { LiaSpinnerSolid } from "react-icons/lia";
import { useForm } from 'react-hook-form';
import { contentContext } from '../../context/contentContext';

function Create() {
  const {loading, setLoading,createRequest} = useContext(contentContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  
  return (
    <div className="create-container">
      <h2>Article Writer Assistent</h2>
        <form onSubmit={handleSubmit(createRequest)}>
          <div className='input-box'>
            <label htmlFor="title">Title</label>
            <input
              type="text" id='title' name='title'
              disabled={loading}
              {...register("title", { required: "Maqola sarlavhasini kiriting." })}
            />
            {errors.title && <p className='error'>{errors.title.message}</p>}
          </div>
          <div className="input-box">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc" id="desc"
              disabled={loading}
              {...register("desc", { required: "Maqola tavsifini kiriting." })}
            ></textarea>
            {errors.desc && <p className='error'>{errors.desc.message}</p>}
          </div>
          <button className={loading ? "loading" : ""} disabled={loading}>
            Generate
            <span className='btn-loader'>
              <LiaSpinnerSolid />
            </span>
          </button>
        </form>
    </div>
  )
}

export default Create