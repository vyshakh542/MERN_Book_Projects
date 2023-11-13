import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleBuyNow = (book) => {
    setSelectedBook(book);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedBook(null);
  };

  const submitPayment = () => {
    // Add your payment processing logic here
    // You can use selectedBook for details about the book being purchased
    // Display success or error messages accordingly
    // This is a placeholder, update it based on your payment processing needs
    console.log('Processing payment for:', selectedBook);
    // Clear selected book and close modal after processing payment
    setSelectedBook(null);
    setShowPaymentModal(false);
  };

  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are Available Here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {books.map((book) => (
          <Card key={book._id}>
            <img src={book.imageURL} alt='' className='h-96' />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              <p>{book.bookTitle}</p>
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              <p>{/* Description or additional information about the book */}</p>
            </p>

            <button
              className='bg-blue-700 font-semibold text-white py-2 rounded'
              onClick={() => handleBuyNow(book)}
            >
              Buy Now
            </button>
          </Card>
        ))}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && selectedBook && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>
              Payment Options for {selectedBook.bookTitle}
            </h2>
            {/* Add your payment options UI here */}
            <div className='flex items-center justify-between mb-4'>
              <label htmlFor='cardNumber' className='mr-2'>
                Card Number:
              </label>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                className='p-2 border rounded'
                placeholder='1234 5678 9012 3456'
                required
              />
            </div>
            <div className='flex items-center justify-between mb-4'>
              <label htmlFor='expirationDate' className='mr-2'>
                Expiration Date:
              </label>
              <input
                type='text'
                id='expirationDate'
                name='expirationDate'
                className='p-2 border rounded'
                placeholder='MM/YYYY'
                required
              />
            </div>
            <div className='flex items-center justify-between mb-4'>
              <label htmlFor='cvv' className='mr-2'>
                CVV:
              </label>
              <input
                type='text'
                id='cvv'
                name='cvv'
                className='p-2 border rounded'
                placeholder='123'
                required
              />
            </div>
            <button
              className='bg-blue-500 text-white p-2 rounded'
              onClick={submitPayment}
            >
              Submit Payment
            </button>
            <button
              className='ml-2 text-gray-600'
              onClick={closePaymentModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
