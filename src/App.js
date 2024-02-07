import "./App.css"


function App(){
function one(event)
{
 var popupoverlay=document.querySelector(".popup-overlay")
 var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

 addpopupbutton.addEventListener("click",function(){
 popupoverlay.style.display="block"
 popupbox.style.display="block"
})
  
  
}
  return(<div>
     <h1 className="navbar">BookSky</h1>
     <div className="container">
      <div className="book-container">
        <h2>Rich Dad Poor Dad</h2>
        <h5>Robert</h5>
        <p>Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence</p>
        <button>Delete</button>
       <button className="makeup">Edit</button>
      </div>
      <div className="popup-overlay">
        <div className="popup-box">
           <h2 className="hook">Add Book</h2>
           <form>
            <input type="Text" placeholder="Book Title"></input>
            <input type="text" placeholder="Book Author"></input>
            <textarea placeholder="Short Description" id="book-description"></textarea>
            <button className="add-book">ADD</button>
            <button className="cancel-popup">CANCEL</button>
           </form>
        </div>
       
      </div>
     </div>
     <button className="add-button" id="add-popup-button" onClick={one()}>+</button>
  </div>)
}
export default App