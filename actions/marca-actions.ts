'use server'

import { stringifyFormData } from "@/lib/helpers"
import { redirect } from "next/navigation"

export async function criarMarca(formData:FormData){
     console.log(formData)
 let response =  fetch(`${process.env.API_URL}/marca`,{
        method:'POST',
        body:stringifyFormData(formData)
    })
   
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id: string){
    let response =  fetch(`${process.env.API_URL}/marca/${id}`,{
        method:'DELETE',
    })
    redirect('/cadastro/marcas/')
}
