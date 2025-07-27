import React, { useContext, useState } from 'react'
import getResponse from './getResponse'
import View from './View';
import { LiaSpinnerSolid } from "react-icons/lia";
import { appContext } from '../../context/appContext';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function Create() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useContext(appContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function createRequest(data) {
    if (loading) return;
    try {
      const result = await getResponse(data.title, data.desc, setLoading);
      setContent(result);
    } catch (err) {
      toast.error("Maqola yaratishda xatolik yuz berdi. Qayta urining.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="create-container">
      <h2>Article Writer Assistent</h2>
      {content ?
        <View content={content} /> :
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
      }
    </div>
  )
}

export default Create