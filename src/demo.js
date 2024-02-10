function Two()
{
    function one(event)
  {
   var popupoverlay=document.querySelector(".popup-overlay")
   var popupbox=document.querySelector(".popup-box")
   var addpopupbutton=document.getElementById("add-popup-button")
  
   addpopupbutton.addEventListener("click",function(event){
   popupoverlay.style.display="block"
   popupbox.style.display="block"
   })
  
  }
    return(<div>
      <button className="add-button" id="add-popup-button" onClick={one}>+</button>
    </div>)
  }

  export default Two