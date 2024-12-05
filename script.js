let arr= [
    {
      songName:"spotify song",url:"/sptify clone/images.png",time:"5:06",pause:"pause-line" 
    },
    {
      songName:"spotify song",url:"/sptify clone/images.png",time:"5:06"
    },
    {
      songName:"spotify song",url:"/sptify clone/images.png",time:"5:06"
    },
    {
      songName:"spotify song",url:"/sptify clone/images.png",time:"5:06"
    },
    {
      songName:"spotify song",url:"/sptify clone/images.png",time:"5:06"
    }
  ]
  
  clatter = ""
arr.forEach(function(elem,wasim){
  console.log(elem,wasim)
  clatter += `     
          <div class="songs" id="${wasim}">
            <img src="${elem.url}"><span>${elem.songName}</span><span>${elem.time}</span>
           </div>
        </div>`
  
}) ;
 document.querySelector(".songItems").innerHTML = clatter  