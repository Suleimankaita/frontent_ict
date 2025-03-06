
const imgs=['images/img_1.jpg','images/img_2.jpg','images/img_3.jpg','images/img_4.jpg','images/img_5.jpg','images/img_5.jpg']

const all=document.querySelector('.imgs')
const man=()=>{

    const images=imgs.slice(0,5).forEach(val=>{
        const me=document.createElement('div')
          console.log(val.length)

          all.innerHTML=`
          <div id="imgs" class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
                     <a href="images/img_1.jpg" class="item-wrap fancybox">
                       <span class="icon-search2"></span>
                       <img class="img-fluid" src="images/img_1.jpg">
                     </a>
                   </div>
                   <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
                     <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
                       <span class="icon-search2"></span>
                       <img class="img-fluid" src="images/img_2.jpg">
                     </a>
                   </div>
          
                   <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
                     <a href="images/img_3.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
                       <span class="icon-search2"></span>
                       <img class="img-fluid" src="images/img_3.jpg">
                     </a>
                   </div>
          
                   <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
          
                     <a href="images/img_4.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
                       <span class="icon-search2"></span>
                       <img class="img-fluid" src="images/img_4.jpg">
                     </a>
          
                   </div>
          
                   <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
                     <a onclick='show()' href="images/img_5.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
                       <span  >${val.length}+</span>
                       <img class="img-fluid" src="images/img_5.jpg">
                  
                        </a>
                   </div>
          
               
                 </div>`
          
      

       })
    
       
    
    
}
man()

const show=()=>{
  all.innerHTML=`
  <div id="imgs" class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_1.jpg" class="item-wrap fancybox">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_1.jpg">
             </a>
           </div>
           <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_2.jpg">
             </a>
           </div>
  
           <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_3.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_3.jpg">
             </a>
           </div>
  
           <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
  
             <a href="images/img_4.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_4.jpg">
             </a>
  
           </div>
  
           <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_5.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_5.jpg">
             </a>
           </div>
  
           <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_1.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_1.jpg">
             </a>
           </div>
  
           <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_2.jpg">
             </a>
           </div>
  
           <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_3.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_3.jpg">
             </a>
           </div>
  
           <div class="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_4.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_4.jpg">
             </a>
           </div>
  
           <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_5.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_5.jpg">
             </a>
           </div>
  
           <div class="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_1.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_1.jpg">
             </a>
           </div>
  
           <div class="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
             <a href="images/img_2.jpg" class="item-wrap fancybox" data-fancybox="gallery2">
               <span class="icon-search2"></span>
               <img class="img-fluid" src="images/img_2.jpg">
             </a>
           </div>
  
           
         </div>`
  

}
console.log('man')