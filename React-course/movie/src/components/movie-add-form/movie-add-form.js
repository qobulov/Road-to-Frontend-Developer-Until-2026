import './movie-add-form.css'

const MovieAddForm = () => {
  return (
    <div className="movie-add-form">
        <h3>Add New Movie</h3>
        <form>
            <input type="text" placeholder="Movie Title" />
            <input type="number" placeholder="Release Year" />
            <button type="submit">Add Movie</button>
        </form>
    </div>
  )
}

export default MovieAddForm;