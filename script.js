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
window.addEventListener("beforeunload", render());
const btn = document.querySelectorAll('button.remove');
console.log(btn)

window.remove = function (id)
{

  let idx
  books.forEach((book,idx) =>
  {
    console.log(id)
    console.log(idx)
    if (idx == id)
    {
       return books.splice(idx, 1)
      
      }
    // if (book.index === id)
    // {
    // console.log(books.splice(idx,1))
    // }
    // else
    // {
    //   console.log("no")
    // }
    render()
})



}

function render()
{
  searchBook.addEventListener('keyup', (e) =>
  {
    e.preventDefault();
    search(e.target.value)
  })
//  var  localBooks = JSON.parse(localStorage.getItem('books')) || books;

  const container = document.getElementById('list-books');
  const firstShelf = document.createElement('div');
  const secondShelf = document.createElement('div');
  container.appendChild(firstShelf)
  container.appendChild(secondShelf)
  firstShelf.classList.add('first-shelf')
  secondShelf.classList.add('second-shelf')
  let newArray = []
  
 books.forEach((b, id) =>
  {

    const imgContainer = document.createElement('div')
    const book = document.createElement('div')
   book.innerHTML = ` Book:
     <div> ${b.title} </div> by
    <div>  ${b.author} </div>
    <button class ="remove" onclick="remove(${id})"> remove </button>
   `;
    const image = document.createElement('img')
    image.setAttribute('src', b.image);
    imgContainer.appendChild(image)
    book.appendChild(imgContainer)
   newArray.push(book)

  
  })
  newArray.forEach((item, index) =>
  {
     if (index <= 2) {
      firstShelf.appendChild(item)
    } else {
      secondShelf.appendChild(item)
    } 
    
  })
  function search(word)
  {
    render()
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
   var  localBooks = JSON.parse(localStorage.getItem('books')) || books;

  btn.addEventListener('click', () =>
  {
  
    const from = document.getElementById('form')
    from.style.display = 'block'
  })
  submit.addEventListener('click', (e) =>
  {
    e.preventDefault();
    form.style.display = "none";
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').value;
   localBooks.push( { title: title, author, image })
    console.log(books)
render()
  })
render()

}

  
addNewBook()
// render()