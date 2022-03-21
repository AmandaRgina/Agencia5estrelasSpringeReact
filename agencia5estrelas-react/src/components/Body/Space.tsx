import Body1 from "./Body1";
import DisplayLateral from "./DisplayLateral";
import Body2 from "../Lugares Populares/Body2";
import ResponsivePlayer from "../ResponsivePlayer/ResponsivePlayer";
import Body3 from "../Body3/Body3";
import CardLugares from "../Body3/CardsLugares";
import MenuScrollBody4 from "../Body4/MenuScroll2";
import MenuScrollBody5 from "../Body5/MenuScroll3";
import Body5 from "../Body5/Body5";
import React from 'react'
function Space(){

return(
<div>
<div className=""style={{height:3500, backgroundColor: "rgb(2, 13, 23)"}}>
<div className="container col-lg-9">

<div className="text-white d-flex " >
  
   <Body1/>
   <DisplayLateral/> 
 


</div>
<div className="text-white d-flex  pt-4">
<Body2/>
    
</div>

<div className="text-white d-flex  pt-5">
<ResponsivePlayer/>
    
</div>

<div className="text-white   pt-5">
<Body3/>
<CardLugares/>
    
</div>

</div>
<div className="text-white d-flex pt-5">
<MenuScrollBody4/>

</div>


</div>
<div className="container d-flex text-white">
<Body5/>

</div>
</div>



)


    
}

export default Space;