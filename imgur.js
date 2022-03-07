let imgur=[
    {
        img:"./card1.png",
        title:"Funny",
        posts:"2,455,100",
        color:"#027b89"
    },
    {
        img:"./card2.png",
        title:"Memes",
        posts:"5,455",
        color:"#60aebb"
    },{
        img:"./card3.png",
        title:"Gaming",
        posts:"61,475",
        color:"#ba519f"
    },{
        img:"./card4.png",
        title:"Comic",
        posts:"4,455,10",
        color:"#60aebb"
    },{
        img:"./card5.jpg",
        title:"Staff Picks",
        posts:"4,455,10",
        color:"#132d31"
    },{
        img:"./card5.png",
        title:"Aww",
        posts:"58,400,75",
        color:"grey"
    },{
        img:"./card6.png",
        title:"Oc",
        posts:"39,307,10",
        color:"skyblue"
    },{
        img:"./card7.png",
        title:"Science And Tech",
        posts:"754,455,77",
        color:"#132d31"
    },{
        img:"./card8.png",
        title:"Awesome",
        posts:"44,455,10",
        color:"#ba519f"
    }
]
imgur.map(e=>{
    let imgur=document.getElementById('imgur')
    let div=document.createElement('div')
    let img=document.createElement('img')
    img.src=e.img
    let title=document.createElement('p')
    title.textContent=e.title
    div.style.background=e.color
    let post=document.createElement('p')
    post.textContent=e.posts+" Posts"
    div.append(img,title,post)
    imgur.append(div)

})
let bounce
function Debounce(){
    let result=document.getElementById('result').style.display="block"
    clearTimeout(bounce)
     bounce=setTimeout(()=>{
     Searching()
    },1000)
}
async function Searching(){
    let search=document.getElementById('search').value
    let response=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a869c26e&s=${search}`)
    let data=await response.json()
    if(data.Response=="False"){
        return false
    }
    console.log(data)
    showresult(data.Search)
}
function showresult(data){
    document.getElementById('result').innerHTML=""
    data.map((e)=>{
        let result=document.getElementById('result')
      let div=document.createElement('div')
      let div1=document.createElement('div')
      let div2=document.createElement('div')
      let name=document.createElement('p')
       name.textContent=e.Title
      let img=document.createElement('img')
        img.src=e.Poster
        div1.append(name)
        div2.append(img)
        div.append(div1,div2)
      result.append(div)
    })
    
}
  getData()
async function getData(){
    let response=await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d2ebbc273d50bbef871ac3b373ce25bc")
    let data=await response.json()
    console.log("dsa",data.results)
    showData(data.results)
}
function showData(data){
  data.map((e)=>{
    let div=document.createElement('div')
    let img=document.createElement('img')
    img.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`
    let name=document.createElement('p')
    name.textContent=e.title
    div.append(img,name)
    let show=document.getElementById('show')
    show.append(div)
  })
}