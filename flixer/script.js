
let leftbtn = document.getElementsByClassName("left-arrow")[0];
let rightbtn = document.getElementsByClassName("right-arrow")[0];
let cards = document.getElementsByClassName("cards")[0];
let searchbox = document.getElementsByClassName("search-box")[0];
let searchinput = document.getElementsByClassName("search")[0];
let movies_cont = document.getElementById("movies");
let series_cont = document.getElementById("series");


leftbtn.addEventListener('click',()=>{
    cards.scrollLeft-=180;
})
rightbtn.addEventListener('click',()=>{
    cards.scrollLeft+=180;
})




let json_url ="movie.json"
fetch(json_url).then(response => response.json())
.then(data=>{
    data.forEach((ele,i) => {
        let {name,date,imdb,genre,sposter,bposter,url}=ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `<img class="poster" src="${sposter}" alt="">
        <div class="restcard">
            <img src="${bposter}" alt="">
            <div class="details">
                <h2>${name}</h2>
                <div class="sub-detail">
                    <p>${genre} , ${date}</p>
                    <h3><span class="imdb">IMDB</span><svg class="star" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${imdb} </h3>
                </div>
            </div>
        </div>`
       
        cards.appendChild(card);
        
        });

        //search box

    data.forEach((ele,i) => {
        let {name,date,imdb,genre,sposter,bposter,url}=ele;
        let card1 = document.createElement('a');
        // card1.classList.add('cont');
        card1.href = url;
        card1.innerHTML = `<img src="${sposter}" alt="poster">
        <div class="cont">
            <h4>${name}</h4>
            <div class = "cont-sub-detail">
                <p>${genre} , ${date} </p> 
                <p><span class="imdb">IMDB</span></span><svg class="star" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${imdb} </p>
            </div>
        </div>`
        
        searchbox.appendChild(card1);
        
        });

        //search filter
        
        searchinput.addEventListener('keyup', (e)=>{
            let filter = searchinput.value.toUpperCase();
            let a = searchbox.getElementsByTagName('a')
            for(i=0;i<a.length;i++)
            {
                let b = a[i].getElementsByClassName('cont')[0];
                let textvalue = b.textContent || b.innerText;
                if(textvalue.toUpperCase().indexOf(filter)>-1)
                {
                    a[i].style.display="flex";
                    searchbox.style.visibility="visible";
                    
                    
                }
                else{
                    a[i].style.display="none";
                    
                }
                if(filter == 0){
                    
                    searchbox.style.visibility="hidden";
                    
                    
                }
            }
           })  
        
        //movies filter
        movies_cont.addEventListener("click",()=>{
            cards.innerHTML="";

            let movies_array = data.filter(ele =>{
                return ele.type == "movie";
            });
            movies_array.forEach((ele,i) => {
                let {name,date,imdb,genre,sposter,bposter,url}=ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `<img class="poster" src="${sposter}" alt="">
                <div class="restcard">
                    <img src="${bposter}" alt="">
                    <div class="details">
                        <h2>${name}</h2>
                        <div class="sub-detail">
                            <p>${genre} , ${date}</p>
                            <h3><span class="imdb">IMDB</span><svg class="star" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${imdb} </h3>
                        </div>
                    </div>
                </div>`
               
                cards.appendChild(card);
                
                });
        })  

        //series filter
        series_cont.addEventListener("click",()=>{
            cards.innerHTML="";

            let series_array = data.filter(ele =>{
                return ele.type == "series";
            });
            series_array.forEach((ele,i) => {
                let {name,date,imdb,genre,sposter,bposter,url}=ele;
                let card = document.createElement('a');
                card.classList.add('card');
                card.href = url;
                card.innerHTML = `<img class="poster" src="${sposter}" alt="">
                <div class="restcard">
                    <img src="${bposter}" alt="">
                    <div class="details">
                        <h2>${name}</h2>
                        <div class="sub-detail">
                            <p>${genre} , ${date}</p>
                            <h3><span class="imdb">IMDB</span><svg class="star" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg> ${imdb} </h3>
                        </div>
                    </div>
                </div>`
               
                cards.appendChild(card);
                
                });
        })       
})


    







