import { FaPhone, FaRegEnvelope } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import Input from "../components/Forms/Input";
import { contactInputs } from "../utils/data";
import Button from "../components/Button";
import { Toaster, toast } from "sonner";
import { contactSchema } from "../utils/auth";
import Textarea from "../components/Forms/Textarea";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";


const Contact = () => {
    const { register, handleSubmit, formState, reset } = useForm({
        resolver: valibotResolver(contactSchema),
        defaultValues: {
            email: "",
            fullName: "",
            message: "",
        }
    });

    const errorSchema = Object.values(formState.errors);

    if (errorSchema.length) {
        toast.error(errorSchema[0].message);
    }


    const handleContactForm = () => {
        toast.success("The message was successfully sent.");
        reset();
    };

    return (
        <div>
            <div className="contact-section section">
                <Toaster richColors position="top-center" />
                <section className="title-container">
                    <h2 className="title">Contact Us</h2>
                    <p>Don&apos;be a stranger</p>
                </section>
                <section className="contacts">
                    <article>
                        <div className="flow">
                            <FaPhone className="icon" />
                            <h2>Phone Number</h2>
                            <p>+212-642-23-6868</p>
                        </div>
                    </article>
                    <article>
                        <div className="flow">
                            <FaRegEnvelope className="icon" />
                            <h2>Email</h2>
                            <p>contact@support.com</p>
                        </div>
                    </article>
                    <article>
                        <div className="flow">
                            <FaLocationDot className="icon" />
                            <h2>Address</h2>
                            <p>123 Fifth Avenue, NY 10160v</p>
                        </div>
                    </article>
                </section>

                <section className="get-in-touch section">
                    <section className="title-container">
                        <h2 className="title">Get In Touch</h2>
                        <p>Message US</p>
                    </section>
                    <div className="form">
                        <form onSubmit={handleSubmit(handleContactForm)}>
                            {contactInputs.map(input => {
                                return (
                                    <Input key={input.id}
                                        {...input} register={register}
                                    />
                                )
                            })}

                            <Textarea register={register} label="message" />
                            <Button className={"btn btn-ghost"} text={"send"} />
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Contact