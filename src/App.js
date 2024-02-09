import "./App.css"


function App(){

    function plus(event)
   {
      var popupoverlay=document.querySelector(".popup-overlay")
      var popupbox=document.querySelector(".popup-box")
      var addbook=document.getElementById("add-book")
      var container=document.querySelector(".container")
      var booktitleinput=document.getElementById("book-title-input")
      var bookauthorinput=document.getElementById("book-author-input")
      var bookdescriptioninput=document.getElementById("book-description-input")

      addbook.addEventListener("click",function(event){
      event.preventDefault()
      var div=document.createElement("div")
      div.setAttribute("class","book-container")
      div.innerHTML=`<h2>${booktitleinput.value}</h2>
      <h5>${bookauthorinput.value}</h5>
      <p>${bookdescriptioninput.value}</p>
      <button onclick="deletebook(event)" class="btn">Delete</button>`
      container.append(div)
      popupbox.style.display="none"
      popupoverlay.style.display="none"

    })
}
    function deletebook(event){
      event.target.parentElement.remove()
    }
  

  return(<div>
     <h1 className="navbar">BookSky</h1>
   <div className="container">
      <div className="book-container">
        <h2>Rich Dad Poor Dad</h2>
        <h5>Robert</h5>
        <p>Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence</p>
        <button onClick={deletebook}>Delete</button>
       <button className="makeup">Edit</button>
      </div>
      <div className="popup-overlay">
        <div className="popup-box">
           <h2 className="hook">Add Book</h2>
           <form>
            <input type="text" placeholder="Book Title" id="book-title-input"></input>
            <input type="text" placeholder="Book Author" id="book-author-input"></input>
            <textarea placeholder="Short Description" id="book-description-input"></textarea>
            <button  id="add-book" >ADD</button>
            <button className="cancel-popup" onClick={plus}>CANCEL</button>
           </form>
        </div>
       
      </div>
     </div>
     
  </div>)
}

export default App