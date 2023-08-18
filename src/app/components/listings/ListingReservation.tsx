"use client";
import React from "react";
import { Range } from "react-date-range";
import Calendar from "../Inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  totalPrice: number;
  dateRange: Range;
  price: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabledDates: Date[];
  disabled?: boolean;
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  totalPrice,
  price,
  dateRange,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">${price}</div>
        <div className="text-neutral-500 font-light">/ night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>
      <div className="flex flex-row items-center p-4 justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
