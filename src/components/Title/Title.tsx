import "./TItle.css"
export interface Props {
   searchInput:string,
   handleChange :(e:React.SyntheticEvent<HTMLInputElement>)=>void,
   handleSubmit:()=>void,
  }

const Title:React.FC<Props> = ({searchInput,handleChange,handleSubmit})=>{
    return(
         <div className="title-container">
           <input type="text"  placeholder="Find Movies..." value={searchInput} onChange={handleChange}/>
           <button onClick={handleSubmit}>Click </button>
        </div>
    )
}

export default Title;