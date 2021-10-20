 let books = [
   {
      index:"0",
      title: "how to success in your life",
      author: "John Doe",
      image: "https://bit.ly/2YLb4cy"
    },
   {
      index:"1",
    title: "Health",
      author: "John Doe",
      image: "https://bit.ly/3DUqpa3"
    },
   {
      index:"2",
       title: "Where are you ",
      author: "Eman",
      image: "https://bit.ly/3aQZHmd"
    }

]
const searchBook = document.getElementById('search-books')
// window.addEventListener("beforeunload", render());
const btn = document.querySelectorAll('button.remove');
console.log(btn)

function render()
{
  searchBook.addEventListener('keyup', (e) =>
  {
    e.preventDefault();
    search(e.target.value)
  })

  const container = document.getElementById('list-books');

  let newArray = []
  
 books.forEach((b, id) =>
  {

   const book = document.createElement('div')
   book.classList.add("book" )
   book.innerHTML = `
     <img src = ${b.image} class="img" />
     <div> ${b.title} </div> by
    <div>  ${b.author} </div>
  
   
   `;
    
   newArray.push(book)
  container.appendChild(book)

  
  })
 
  function search(word)
  {
    let newBooks = books.filter(book=> book.title ===word|| book.author ===word )
  console.log(newArray)
    if (newArray) {container.innerHTML = ""};
   
  newBooks.map((book,id) =>
    {
      const book2 = document.createElement('div')
      const imgContainer = document.createElement('div')
       book2.innerHTML += `
       
    <h1> ${book.title} </h1>
    <h1> ${book.author} </h1>
 
    `
       container.appendChild(book2)
   const image = document.createElement('img')
      image.setAttribute('src', book.image);
      imgContainer.appendChild(image)
      book2.appendChild(imgContainer)
    })
   
  }
  
  

}
function addNewBook()
{
 
  const btn = document.getElementById('add')
  const submit = document.getElementById('submit_btn')
btn.style.display ="none"
  btn.addEventListener('click', () =>
  {
    const from = document.getElementById('form');
    form.style.display="block"
   
  })
  submit.addEventListener('click', (e) =>
  {

    e.preventDefault();
    console.log("why is repeated")
    form.style.display = "none";
    btn.style.display = "block"
        console.log(books)

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').value;
  books.push(  { title: title, author, image })
    console.log(books)
render()
  })
// render()

}

  
addNewBook()
render()