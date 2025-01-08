import { useForm } from "react-hook-form"
import { usePortafalioStore } from "../../store/portafolio.store"
import { useState } from "react"
import { toast } from "react-toastify"
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from "../ui/ErrorMessage";
import { FormEmail } from "../../type";

const initialValues: FormEmail = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  }
 
export const Contact = () => {
    const phone=usePortafalioStore(state=>state.phone) 
    const address=usePortafalioStore(state=>state.address)
    const email=usePortafalioStore(state=>state.email)
    const { register, handleSubmit, formState: { errors } ,reset} = useForm<FormEmail>({defaultValues:initialValues});
    const [isLoading, setIsLoading] = useState(false);
    // Enviar mensaje
    const onSubmit = async (data: FormEmail) => {
        setIsLoading(true);
        try { 
            const result = await emailjs.send(
                import.meta.env.VITE_SERVICE_ID , // Aquí va tu ID de servicio de EmailJS
                import.meta.env.VITE_PLANTILLA_ID, // Aquí va tu ID de plantilla
                data,
                import.meta.env.VITE_PUBLIC_ID // Aquí va public ID
            );
            console.log(result.text);
            toast.success('¡Mensaje enviado con éxito!' );
            reset() 
            } catch (error) {
                toast.error('Hubo un error al enviar el mensaje. Intenta nuevamente.' );
            } finally {
            setIsLoading(false);

            }
    };
  return (
    <div id="contacto" className="contacto" style={{backgroundImage:'url("img/contact_bg.png")'}}>
        <div className="contenido-seccion">
            <h2>CONTACTO</h2>
            <div className="fila">
                <form onSubmit={handleSubmit(onSubmit)} className="col" >
                    <input
                    type="text"
                    placeholder="Tu Nombre"
                    {...register('name', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    <input
                    type="text"
                    placeholder="Número telefónico"
                    {...register('phone', {
                        required: 'Este campo es obligatorio',
                        pattern: {
                        value: /^[0-9]{9}$/,
                        message: 'El número telefónico debe tener 9 dígitos'
                        }
                    })}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}

                    <input
                    type="text"
                    placeholder="Dirección de correo"
                    {...register("email", {
                        required: "El Email de registro es obligatorio",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "E-mail no válido",
                        },
                      })}
                    />
                    {errors.email &&  <ErrorMessage>{errors.email.message}</ErrorMessage>}

                    <input
                    type="text"
                    placeholder="Tema"
                    {...register('subject', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}

                    <textarea
                    placeholder="Mensaje"
                    {...register('message', { required: 'Este campo es obligatorio' })}
                    ></textarea>
                    {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}

                    <button type="submit" disabled={isLoading} className="disabled:opacity-25">
                        {isLoading ? 'Enviando...' : 'Enviar Mensaje'} <i className="fa-solid fa-paper-plane"></i>
                        <span className="overlay"></span>
                    </button>
                </form>
                <div className="col">
                    <img src="img/ubicacion.png" alt=""/>
                    <div className="info">
                        <ul>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                {address}
                            </li>
                            <li>
                                <i className="fa-solid fa-mobile-screen"></i>
                                Llamanos: {phone}
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope"></i>
                                Email: {email}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
