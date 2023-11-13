import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({ headline, books }) => {
  const handleBookClick = (book) => {
    // Open a new window with payment options
    const paymentOptionsWindow = window.open('', '_blank');

    // Render payment options content in the new window
    paymentOptionsWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f5f5f5;
              padding: 20px;
              text-align: center;
            }
            h2 {
              color: #333;
            }
            form {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 20px;
            }
            label {
              display: block;
              margin-bottom: 8px;
              font-weight: bold;
            }
            input {
              width: 300px;
              padding: 10px;
              margin-bottom: 12px;
              box-sizing: border-box;
              border: 1px solid #ddd;
              border-radius: 5px;
              font-size: 16px;
            }
            button {
              background-color: #007BFF; /* Updated to use the specified color */
              color: white;
              padding: 12px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;
            }
            button:hover {
              background-color: #0056b3;
            }
            .error {
              color: #ff0000;
              margin-top: 8px;
            }
            .success {
              color: #008000;
              margin-top: 8px;
            }
          </style>
        </head>
        <body>
          <h2>Payment Options for - ${book.bookTitle}</h2>
          <form id="paymentForm">
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required>

            <label for="expirationDate">Expiration Date:</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YYYY" required>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required>

            <button type="button" onclick="submitPayment()">Submit Payment</button>
            <div id="error" class="error"></div>
            <div id="success" class="success"></div>
          </form>

          <button onclick="window.close()" style="background-color: #007BFF; color: white; padding: 12px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Close</button>

          <script>
            function submitPayment() {
              // You can add your payment processing logic here
              const cardNumber = document.getElementById('cardNumber').value;
              const expirationDate = document.getElementById('expirationDate').value;
              const cvv = document.getElementById('cvv').value;

              // Example: Validate the inputs
              if (!cardNumber || !expirationDate || !cvv) {
                document.getElementById('error').innerText = 'Please fill in all fields.';
              } else {
                // Example: Display success message
                document.getElementById('error').innerText = '';
                document.getElementById('success').innerText = 'Payment successful!';

                // You can redirect or perform other actions here
              }
            }
          </script>
        </body>
      </html>
    `);
  };

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl my-5 font-bold text-center'>{headline}</h2>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className='mySwiper w-full h-full'
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <div className='relative'>
                <img src={book.imageURL} alt='' />
                <div
                  className='absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded cursor-pointer'
                  onClick={() => handleBookClick(book)}
                >
                  <FaCartShopping className='w-4 h-4 text-white' />
                </div>
              </div>
              <div>
                <div>
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                  <div>
                    <p>$10.00</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
