import { useForm } from "react-hook-form"
import { usePortafalioStore } from "../../store/portafolio.store"
import { useState } from "react"
import { toast } from "react-toastify"
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import ErrorMessage from "../ui/ErrorMessage";
import { FormEmail } from "../../type";
import { SectionHeader } from "../ui/SectionHeader";

const initialValues: FormEmail = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
}

const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="font-mono text-label-sm text-outline uppercase font-semibold">{children}</label>
)

export const Contact = () => {
    const phone = usePortafalioStore(state => state.phone)
    const whatsapp = usePortafalioStore(state => state.whatsapp)
    const location = usePortafalioStore(state => state.location)
    const email = usePortafalioStore(state => state.email)
    const socialNetworks = usePortafalioStore(state => state.socialNetworks)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormEmail>({ defaultValues: initialValues });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormEmail) => {
        setIsLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_PLANTILLA_ID,
                data,
                import.meta.env.VITE_PUBLIC_ID
            );
            toast.success('¡Mensaje enviado con éxito!');
            reset()
        } catch {
            toast.error('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const links = [
        { href: `https://wa.me/${whatsapp}`, icon: 'fa-brands fa-whatsapp', cls: 'text-tertiary', text: `WhatsApp (${phone})`, external: true },
        { href: `mailto:${email}`, icon: 'fa-solid fa-envelope', cls: 'text-secondary', text: email, external: false },
        ...socialNetworks.filter(s => s.title !== 'WhatsApp').map(s => ({ href: s.url, icon: s.icon, cls: 'text-primary', text: s.title, external: true })),
    ]

    return (
        <section id="contacto" className="w-full bg-surface-container-lowest py-space-xl md:py-16 dot-grid">
            <div className="max-w-site mx-auto px-gutter flex flex-col gap-space-lg">
                <SectionHeader kicker="// 06. Contacto" title="Conversemos" />
                <p className="text-body-md text-outline -mt-space-sm max-w-2xl">
                    ¿Tienes una vacante o un proyecto? Escríbeme y coordinamos una llamada.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-7 card p-space-lg flex flex-col gap-space-md" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                            <div className="flex flex-col gap-1">
                                <Label>Nombre o empresa *</Label>
                                <input className="field" type="text" placeholder="Tu nombre"
                                    {...register('name', { required: 'Este campo es obligatorio' })} />
                                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label>Correo electrónico *</Label>
                                <input className="field" type="email" placeholder="correo@empresa.com"
                                    {...register("email", {
                                        required: "El email es obligatorio",
                                        pattern: { value: /\S+@\S+\.\S+/, message: "E-mail no válido" },
                                    })} />
                                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                            <div className="flex flex-col gap-1">
                                <Label>Teléfono *</Label>
                                <input className="field" type="tel" placeholder="9 dígitos"
                                    {...register('phone', {
                                        required: 'Este campo es obligatorio',
                                        pattern: { value: /^[0-9]{9}$/, message: 'El número telefónico debe tener 9 dígitos' }
                                    })} />
                                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                            </div>
                            <div className="flex flex-col gap-1">
                                <Label>Asunto *</Label>
                                <input className="field" type="text" placeholder="Vacante, proyecto, consulta..."
                                    {...register('subject', { required: 'Este campo es obligatorio' })} />
                                {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label>Mensaje *</Label>
                            <textarea className="field" rows={5} placeholder="Cuéntame sobre el puesto o proyecto"
                                {...register('message', { required: 'Este campo es obligatorio' })} />
                            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                        </div>
                        <div className="flex justify-end pt-2">
                            <button type="submit" disabled={isLoading}
                                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-xl bg-secondary text-on-secondary-fixed font-display text-headline-sm font-bold shadow-[0_0_16px_rgba(76,215,246,0.3)] hover:bg-secondary-container transition-all disabled:opacity-40">
                                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </form>

                    <div className="lg:col-span-5 flex flex-col gap-space-md">
                        <div className="card p-space-lg flex flex-col gap-space-sm">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">location_on</span>
                                <span className="font-mono text-label-md text-on-surface font-bold">Base: {location}</span>
                            </div>
                            <p className="text-body-sm text-outline">Disponible para trabajo presencial en Lima, híbrido o remoto.</p>
                        </div>
                        <div className="card p-space-md flex flex-col gap-space-xs">
                            <span className="font-mono text-label-sm text-outline uppercase tracking-wider px-1 pb-1">Enlaces rápidos</span>
                            {links.map(l => (
                                <a key={l.href} href={l.href} {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                                    className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between gap-2 hover:bg-surface-container-high transition-colors">
                                    <span className="flex items-center gap-space-sm text-body-sm text-on-surface font-medium break-all">
                                        <i className={`${l.icon} ${l.cls} w-5 text-center`} /> {l.text}
                                    </span>
                                    <span className="material-symbols-outlined text-outline !text-[18px]">open_in_new</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
