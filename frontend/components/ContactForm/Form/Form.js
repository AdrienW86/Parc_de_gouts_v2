import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import styles from './form.module.css'

export default function Form() {

    const [isLoading, setIsLoading] = useState(false)
    const [isSended, setIsSended] = useState(false);
    const [valable, setIsValable] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsValable(true);
        }
      }, []);

      const onSubmitHandler = async (data) => {
        if (!isLoading) {
            setIsLoading(true);
    console.log(data)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            console.log(response)
            console.log(result)
            setIsLoading(false);
    
            if (!response.ok) {
                console.log("error");
            } else {
                console.log("ok");
                reset();
                setIsSended(true);
            }
        }
    };
  
  return (
    <>
    {valable ?
    
    <div style={{textAlign: "center"}}>
         {isSended && (
        <div style={{ display: 'flex', position: 'absolute', justifyContent: "center", marginTop: "200px", width: '100%' }}> 
            <p style={{textAlign: "center", color: "white", border: "2px solid white", padding: "16px", borderRadius: "8px", fontSize: '1.2rem', lineHeight: 2.2, background: 'black' }}>
            Votre message a bien été envoyé. <br/>
            Nous vous répondrons dans les plus bref délais.
        </p>
        </div>
    )}
       {!isSended && (
        <form 
        className={styles.form}
        onSubmit={handleSubmit(onSubmitHandler)}>

   
        
        <section className={styles.section}>
            <div className={styles.row}>
                <div style={{display: "flex", margin: "auto"}}>
                    <label 
                        htmlFor='prenom'
                        className={styles.label}
                    > Prénom  
                    </label>
                    {errors.prenom && <p style={{ color: 'red', marginLeft: "8px"}}> (requis)</p>}
                </div>
                <input 
                    placeholder='Prénom' 
                    id='prenom'
                    className={styles.input}
                    {...register('prenom', {required: true})}
                />    
                                
            </div>
            <div className={styles.row}>
                <div style={{display: "flex", margin: "auto"}}>
                    <label 
                        htmlFor='nom' 
                        className={styles.label} 
                    > Nom 
                    </label>
                    {errors.nom && <p style={{ color: 'red', marginLeft: "8px"}}> (requis)</p>} 
                </div>
                <input 
                    placeholder='Nom' 
                    name="nom" autoComplete="family-name"
                    id="nom"
                    className={styles.input}
                    {...register('nom', {required: true})} 
                />               
            </div>
             <div className={styles.row}>
                <div style={{display: "flex", margin: "auto"}}>
                <label 
                        htmlFor='email'
                        className={styles.label}
                    > Email 
                    </label>
                    {errors.email && <p style={{ color: 'red', marginLeft: "8px"}}> (requis)</p>}
               </div>
                <input 
                    placeholder='Email' 
                    id="email" autoComplete="email"
                    className={styles.input}
                    {...register('email', {required: true})}
                /> 
            </div>
            <div className={styles.row} >
                <div style={{display: "flex", margin: "auto"}}>
                    <label 
                        htmlFor='phone'
                        className={styles.label}
                    > Téléphone 
                    </label>
                    {errors.phone && <p style={{ color: 'red', marginLeft: "8px"}}> (requis)</p>} 
                </div>
                <input 
                    placeholder='Votre téléphone' 
                    id="phone" autoComplete="phone"
                    className={styles.input}
                    {...register('phone', {required: true})}
                />              
            </div>           
        </section>
        <section className={styles.section}>
            <div className={styles.row}>
               <div style={{display: "flex", margin: "auto"}}>
                    <label 
                        htmlFor="message"
                        className={styles.label}
                    > Votre message 
                    </label>
                    {errors.message && <p style={{ color: 'red', marginLeft: "8px"}}> (requis)</p>}
               </div>
                <textarea
                    id="message"
                    placeholder='Bonjour...'
                    className={styles.text_area}
                    {...register('message', {required: true})}
                />               
            </div>          
            <div>
              {!isLoading && <button className={styles.submit}> Envoyer </button> }
            </div>

        </section>
    </form>
       )} 
    </div>
    : null }

    </>
  )
}