import React, { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(null);

  const handleChangeDate = event => {
    setDate(event.target.value);
  };

  return (
    <div className="p-3 bg-gray-200 flex justify-center">
      <input
        className="w-24 h-10 bg-white focus:outline-none rounded-md text-gray-400 border border-gray-400"
        role="calendar"
        type="date"
        onChange={handleChangeDate}
      />
    </div>
  );
};

export default Calendar;
