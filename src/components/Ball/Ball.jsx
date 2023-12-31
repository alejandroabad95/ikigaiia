import './Ball.css'




const Ball = ({background,width,height,mixBlendMode,question,showForm,handleChange,formName}) => {

    return(
    
        <div className='ball' style={{background,width,height,mixBlendMode}}>
            <h2 className='question'>{question}</h2>
            { showForm && 
            (<form>
            <input type="text" className='custom-form mt-5'
                  onChange={(e) => handleChange(e, formName)}
            />
            </form>)
            }
        </div>
    )

}

export default Ball