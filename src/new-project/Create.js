import React,{useState} from 'react';
import img from '../new-project/image/nft image.png';
const Create = () => {

const [showImage, setShowImage] = useState();
const [inputName, setInputName] = useState();
const [royalty, setRoyality] = useState();
const [Link, setLink] = useState();
const [textArea, setTextArea] = useState();
const [craeteName, setCreateName] = useState({
    name:'',
    Royalties:'',
    link:'',
    description:''
});

const ButtonClick =(e)=>
{
    console.log('e',e);
    e.preventDefault();
    if(craeteName.name === "" || craeteName.Royalties === "" || craeteName.description === "")
    {
        alert("Please fill the form")
    }
   
}

const onChangeImag = (e) =>{
    if (e.target.files.length > 0)
        {
          const file = URL.createObjectURL(e.target.files[0]);
          setShowImage(file);
        } 
}
const inputOnchange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputName(craeteName.name)
    setRoyality(craeteName.Royalties)
    setLink(craeteName.link)
    setTextArea(craeteName.description)
    
    setCreateName({
        ...craeteName, [name]: value
    })
}

    return(
        <div className='container-fluid' style ={{color:"white", background:"black"}}>
          <div className='row'>
          <div className='col-7'  style={{color:"grey"}}>
          <h1 style={{color:"white"}}>Create NFT</h1>
            <p>*Required feild</p>
            <form onSubmit={ButtonClick}>
            <div>*Image</div>
            <p className="text-sub-label">File types supported: JPG, PNG, GIF, SVG. Max size: 10 MB</p>
            <img src = {img}  style={{width:"18rem", borderRadius:"1rem"}} />
            <label for="formFile" className="form-label"></label>
            <input onChange={onChangeImag} className="form-control" type="file" id="formFile" style={{opacity: "0", top: "auto", position: "absolute", bottom: "15em"}} /><br/><br/>
            <label className="form-label" for="typeText">*Name</label>
            <input type="text" id="typeText" name="name" value={craeteName.name} onChange={inputOnchange}  className="form-control" style={{background:"black", border:"3px solid grey", width:"18rem", borderRadius:"0.6rem"}} /><br></br>
            <label className="form-label" for="typeText">Royalties*</label>
            <p>Choose a royalty for your NFT</p>
            <select className="form-select" onChange={inputOnchange} name="Royalties" value={craeteName.Royalties} aria-label="Default select example" style={{background:"grey", width:"5rem", borderRadius:"1.3rem"}}>
                <option value="1">1%</option>
                <option value="2">2%</option>
                <option value="3">3%</option>
                <option value="4">4%</option>
                <option value="5">5%</option>
                <option value="6">6%</option>
                <option value="7">7%</option>
                <option value="8">8%</option>
                <option value="9">9%</option>
                <option value="10">10%</option>
            </select><br/>
            <div className="form-group">
            <label for="usr"><b>External link</b></label>
                <p>Jokes will include a link to this URL on this item's detail page, so that users can click to<br/> learn more about it.<br/>
                You are welcome to link to your own webpage with more details.</p>
            <input type="text" name="link" value={craeteName.link} onChange={inputOnchange}  placeholder='http://yoursite.io/item/123' className="form-control" id="usr" style={{background:"black",border:"2px solid grey", width:"20rem", borderRadius:"0.5rem"}}/><br/>
            <div className="form-group">
                 <label for="comment">Description</label>
                 <p>The description will be included on the item's detail page underneath its image.
                 </p>
                    <textarea className="form-control" name="description" onChange={inputOnchange} value={craeteName.description}  rows="5" id="comment" placeholder='provide a detailed description of your item' style={{width:"25rem", background:"black",border:"2px solid grey"}}></textarea><br/>
            </div>
                <button type="submit" className="btn btn-warning" style={{boxShadow: "#fcbc45" , fontSize:"1.4rem", borderRadius:"0.5rem"}}>Create</button>
            </div>
            </form>
            </div >
            <div style={{width:"25rem",height:"25rem",background:"grey", margin:"20px", boxshadow: "5px 10px 18px 18px #fff", display:"flex",justifyContent:"center" , borderRadius:"2rem"}}>
            <div className='col-5'>
               <img src={showImage} style={{width:"15rem", height:"18rem", borderRadius:"2rem"}}/>
             <ul style={{background:"pink"}}>
               <div>{inputName}</div>
               <div>{royalty}</div>
               <div>{Link}</div>
               <div>{textArea}</div>   
            </ul>
            </div>
            </div>
            </div> 
        </div> 

           
    
    )
}
export default Create;