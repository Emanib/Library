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
const search = document.getElementById("search-books")

search.addEventListener("keyup",(e)=>{
  e.preventDefault();
  const word = e.target.value 
  console.log(word)
  const newBooks = books.filter(book =>
  {
  return book.title.includes(word) || book.author.includes(word)
  })
  container.innerHTML = "";
  var newArr =[];
  newBooks.forEach((el,i) => {
        const imageContainer = document.createElement('div');
      const book = document.createElement('div');
      book.classList.add("book")
      container.appendChild(book)
        imageContainer.classList.add('imageContainer');
        
        book.classList.add(`book_${i}`);
        book.textContent = `${books[i].title} 
        by ${books[i].author}`
        const image = document.createElement('img');
        image.setAttribute('src', el.image);
        image.classList.add(`img`);
        imageContainer.appendChild(image);
        book.appendChild(imageContainer);
        
        newArr.push(book)        

    });
 
 
})
// window.onload = render();
  const container = document.getElementById('list-books');

function render(){
    container.innerHTML = ''; //clear existing children of container
    var newArr =[];
    books.forEach((el,i) => {
        const imageContainer = document.createElement('div');
      const book = document.createElement('div');
      book.classList.add("book")
      container.appendChild(book)
        imageContainer.classList.add('imageContainer');
        
        book.classList.add(`book_${i}`);
        book.textContent = `${books[i].title} 
        by ${books[i].author}`
        const image = document.createElement('img');
        image.setAttribute('src', el.image);
        image.classList.add(`img`);
        imageContainer.appendChild(image);
        book.appendChild(imageContainer);
        
        newArr.push(book)        

    });
 

}
function addNewBook(){
    
    const addBookButton = document.getElementById('add');
    const submitButton = document.getElementById('submit_btn')
    addBookButton.addEventListener('click', () => {
        const form = document.getElementById('form');
        form.style.display = "block"
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        form.style.display = "none";
        const bookTitleVal = document.getElementById('title').value;
        const authorVal = document.getElementById('author').value;
        const imageLinkVal = document.getElementById('image').value;

        books.push({
            title: bookTitleVal,
            author: authorVal,
            image: imageLinkVal

        });
  
        render();
       
    });
    render();

}
addNewBook();
  
