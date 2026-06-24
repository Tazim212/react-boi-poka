import faqimg from '../../assets/faqBanner.jpg'

const FAQ = () => {
    return (
        <section className="text-center md:text-right p-5 text-black">
            <h1 className="font-bold text-3xl py-2">Faq Questions</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perferendis?</p>


            <section className='flex flex-col md:flex-row gap-6 my-4 justify-around items-center'>
                <div>
                    <img src={faqimg} className='rounded-full mask-b-from-20% shadow-2xl pt-3' alt="" />
                </div>

                <div className='w-1/2 space-y-3'>
                    <div className="collapse border bg-cyan-700 collapse-plus text-gray-200">
                        <input type="checkbox" />
                        <div className="collapse-title  font-semibold">How do I add a book to my reading list?</div>
                        <div className="collapse-content text-sm">
                            Simply open the book details page and click the 'Mark as Read' button to add it to your reading list.
                        </div>
                    </div>

                    <div className="collapse border bg-cyan-700 collapse-plus text-gray-200">
                        <input type="checkbox" />
                        <div className="collapse-title  font-semibold">Can I save books to my wishlist?</div>
                        <div className="collapse-content text-sm">
                            Yes, you can save any book to your wishlist by clicking the 'Add to Wishlist' button on the book details page.
                        </div>
                    </div>

                    <div className="collapse border bg-cyan-700 collapse-plus text-gray-200">
                        <input type="checkbox" />
                        <div className="collapse-title  font-semibold">Do I need an account to use Book Vibes?</div>
                        <div className="collapse-content text-sm">
                            You can browse books without an account, but signing in is required to manage your reading list and wishlist.

                        </div>
                    </div>

                    <div className="collapse border bg-cyan-700 collapse-plus text-gray-200">
                        <input type="checkbox" />
                        <div className="collapse-title  font-semibold">Can I remove a book from my reading list or wishlist?</div>
                        <div className="collapse-content text-sm">
                            Yes, you can easily remove books anytime using the 'Unmark' or 'Remove from Wishlist' options.
                        </div>
                    </div>

                    <div className="collapse border bg-cyan-700 collapse-plus text-gray-200">
                        <input type="checkbox" />
                        <div className="collapse-title  font-semibold">How can I discover new books?</div>
                        <div className="collapse-content text-sm">
                            Explore featured books, trending collections, categories, and personalized recommendations to find your next read.
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}
export default FAQ;