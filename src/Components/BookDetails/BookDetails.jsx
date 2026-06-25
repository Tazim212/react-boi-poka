import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';
import { FaStar } from 'react-icons/fa';

const BookDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const { user } = useAuth();

    const axiosInstance = useAxios();

    useEffect(() => {
        axiosInstance.get(`/bookdetails/${id}`)
            .then(data => setDetails(data.data));
    }, [id]);

    const handleMarkRead = async () => {

            const result = await Swal.fire({
                title: "Do you want to read the book?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: "No"
            });

            if (result.isConfirmed) {
                try {
                    const res = await axiosInstance.post(
                        `/savedbook?email=${user?.email}`,
                        {
                            bookId: id,
                            bookName: details.bookName,
                            author: details.author,
                            image: details.image,
                            review: details.review,
                            totalPages: details.totalPages,
                            category: details.category,
                            status: "read"
                        }
                    );

                    if (res.data.insertedId) {
                        Swal.fire("Saved!", "", "success");
                    }
                } catch (err) {
                    console.log(err)
                    Swal.fire("Book already exists");
                }
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        };

        const handleSavedDel = (savedId) => {
            axiosInstance.delete(`/savedbook/${savedId}`)
                .then(data => {
                    if (data.data.deletedCount) {
                        Swal.fire("Book has been Unmarked");
                        // const deleted = savedMark.filter
                        // setSavedMark(prev => prev.filter(book => book._id !== savedId));
                    }
                });
        };

        return (
            <div className="hero min-h-screen bg-gray-200 text-black pt-7">
                <div className="flex flex-col gap-9 lg:flex-row">
                    <img
                        src={details?.image}
                        className="w-80 h-100 rounded-lg shadow-2xl ml-5 md:ml-10"
                    />
                    <div className='w-full md:w-1/2'>
                        <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left">{details?.bookName}</h1>
                        <div className='flex flex-col mt-5'>
                            <span className='font-semibold text-xl text-center md:text-left'>By :  {details?.publisher}</span>
                            <div className="badge badge-primary mt-8 mx-auto md:mx-0">{details?.category}</div>
                        </div>

                        <p className={`py-6 mx-2 md:mx-0 text-center md:text-left ${!isExpanded ? "line-clamp-3" : ""}`}>
                            {details?.review}
                        </p>

                        {details?.review?.length > 140 &&
                            <button onClick={() => setIsExpanded(!isExpanded)}
                                className='text-blue-500 font-medium hover:underline cursor-pointer'>
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        }

                        <div className='flex items-center py-2 ml-4 md:ml-0'>
                            {details.tags?.map((tag, index) => <div key={index} className="badge badge-dash badge-accent mr-4">{tag}</div>)}
                        </div>

                        <div className="divider divider-accent"></div>

                        <div className='flex gap-5 md:gap-20 ml-4 md:ml-0'>
                            <p className='font-semibold'>Number of Pages : </p>
                            <span>{details?.totalPages}</span>
                        </div>
                        <div className='flex gap-5 md:gap-32 py-2 ml-4 md:ml-0'>
                            <p className='font-semibold'>Publisher : </p>
                            <span>{details?.publisher}</span>
                        </div>
                        <div className='flex gap-3 md:gap-20 ml-4 md:ml-0'>
                            <p className='font-semibold'>Year of Publishing: </p>
                            <span>{details?.yearOfPublishing}</span>
                        </div>
                        <div className='flex gap-5 md:gap-40 py-2 ml-4 md:ml-0'>
                            <p className='font-semibold'>Rating : </p>
                        </div>

                        <div className='my-6 ml-3 md:ml-0'>
                            {/* {
                            isSaved
                                ? <button onClick={() => handleSavedDel(isSaved._id)} className="btn btn-success mr-5 px-2">Mark As UnRead</button>
                                : <button onClick={handleMarkRead} className="btn btn-success mr-5 px-2">Mark As Read</button>
                        } */}
                            <button onClick={handleMarkRead} className="btn btn-success mr-5 px-2">Mark As Read</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default BookDetails;