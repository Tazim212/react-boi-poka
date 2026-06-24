import { Link } from "react-router";

const AllBooksCard = ({ book }) => {

    const {_id, bookName, author, image, review, category, totalPages, rating, publisher, yearOfPublishing} = book
    return (
        <div className="card bg-gray-600 h-80 md:h-fit w-80 shadow-sm mx-auto my-5
        transform transition hover:-translate-y-5 motion-reduce:transition-normal motion-reduce:hover:transform-3d">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-3xl h-48 md:h-74 w-full object-cover px-2 md:px-0" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl"> <span className="font-bold">Title:</span> {bookName}</h2>
                <p><span className="font-bold">Author Name:</span> {author}</p>
                <div className="card-actions">
                    <Link to={`/bookdetails/${_id}`}><button className="btn btn-info btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
export default AllBooksCard;
