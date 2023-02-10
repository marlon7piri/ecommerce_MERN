import React, { useContext, useState } from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup"
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../components/data/DataProvider";

export default function Createproduct() {
  const { createProduct ,editProduct} = useContext(DataContext);

const params = useParams()



  return (
    <div className=" bg-gray-400 w-full min-h-screen p-48 ">
      <Formik initialValues={{ nombre: "", descripcion: "" , precio: "", image:null }}

      validationSchema={Yup.object({
nombre:Yup.string().required(),
precio:Yup.number().required(),
descripcion:Yup.string().required(),


      })}
      initialStatus
      onSubmit={(values,actions)=>{

if(params.id){
  editProduct(params.id)
}else{
  createProduct(values)

  

}
     
         
      
        
      }}>
        {({ handleSubmit,setFieldValue }) => (
          <Form
            className=" w-full gap-4 p-4 items-center shadow-md rounded-md "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col ">
              <label >Nombre:</label>
              <div className="flex flex-col">
              <Field
                className=""
                type="text"
                name="nombre"
              />
              <ErrorMessage name="nombre" component="p"/>
              </div>
            </div>
            <div className="">
              <label>Descripcion:</label>
              <div className="flex flex-col">
              <Field type="text" name="descripcion" className=""/>
              <ErrorMessage name="descripcion" component="p"/>
              </div>
            </div>
          <div >
              <label>Precio:</label>
              <div className="flex flex-col">
              <Field type="number" name="precio" />
              <ErrorMessage name="precio" component="p"/>
              </div> 
            </div> 
            <div >
              <label>Imagen:</label>
              <div className="">
             <input className="bg-gray-700 ml-2 p-2 text-white font-extrabold mb-2" type="file" name="image" id="" onChange={(e)=>setFieldValue("image",e.target.files[0])}/>
              
              </div> 
            </div>

            <button
              className="w-max bg-red-600 text-gray-50 rounded-md font-bold p-2 hover:bg-red-400"
              type="submit"
            >
              {!params.id ? " Crear " : " Editar"}
            </button>
          </Form>

   
        )}
      </Formik>
  
    </div>
  );
}
