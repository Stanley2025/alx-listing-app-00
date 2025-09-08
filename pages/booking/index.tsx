// pages/booking/index.tsx

import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy"; // Import the new component
import React from "react";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Confirm and pay</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <BookingForm />
          <CancellationPolicy />
        </div>
        
        {/* Right Column */}
        <div>
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </div>
  );
}