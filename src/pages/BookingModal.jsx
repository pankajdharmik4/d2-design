import React, { useState, useEffect } from 'react';
import { Button } from '../components'; // Adjust the import path as needed
import axios from 'axios';

const BookingModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,13}$/;
  const isValidName = /^[a-zA-Z\s]+$/;

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateName = (name) => {
    if (isValidName.test(name) && name.trim().length > 1) {
      setNameError('');
      return true;
    } else {
      setNameError('Invalid name. Please enter a valid name.');
      return false;
    }
  };

  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Invalid email address.');
      return false;
    }
  };

  const validatePhone = (phone) => {
    if (phoneRegex.test(phone)) {
      setPhoneError('');
      return true;
    } else {
      setPhoneError('Invalid phone number.');
      return false;
    }
  };

  const validateForm = () => {
    const isNameValid = name.trim().length > 1;
    const isEmailValid = emailRegex.test(email)
    const isPhoneValid = phoneRegex.test(phone);

    setIsSubmitDisabled(!(isNameValid && isEmailValid && isPhoneValid));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      setIsSubmitDisabled(true);

      try {
        const response = await axios.post('https://www.invisalign.rothleylodgedentalpractice.co.uk/my_server_project/public/index.php', {
          name,
          email,
          phone,
          message,
          type: 'Invisalign'
        });

        if (response.data.success) {
          console.log('Mail sent successfully');
          // Reset the form
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          onClose();
        } else {
          console.error('Failed to send mail:', response.data.error);
        }
      } catch (error) {
        console.error('Error sending mail:', error);
      } finally {
        setIsSubmitDisabled(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:mx-0 mx-2">
      <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full shadow-lg">
        <h5 className="text-2xl font-bold mb-1 text-[#00102d] text-center">Book Your Appointment</h5>
        <div className="mb-4">
          <p class="text-gray-400 text-xs">Please fill out your details and a member of our team will be in touch.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => { validateName(name); validateForm() }}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 ${nameError ? 'border-red-500' : ''}`}
              required
            />
            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => { validateEmail(email); validateForm() }}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 ${emailError ? 'border-red-500' : ''}`}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => { validatePhone(phone); validateForm() }}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 ${phoneError ? 'border-red-500' : ''}`}
              required
            />
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          </div>

          {/* <div className="mb-4">
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="preferredDate"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              required
            />
          </div> */}

          <div className="mb-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={isSubmitDisabled ? "px-4 py-2 bg-[#808080] text-white hover:bg-[#808080] transition rounded-md" : "px-4 py-2 bg-[#00102d] text-white hover:bg-[#0e1a4d] transition rounded-md"}
              disabled={isSubmitDisabled}
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;