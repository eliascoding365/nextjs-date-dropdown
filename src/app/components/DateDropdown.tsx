import React, { useState } from 'react';
import { DateDropdownDay } from './DateDropdown/DateDropdownDay/DateDropdownDay';
import { DateDropdownMonth } from './DateDropdown/DateDropdownMonth/DateDropdownMonth';
import { DateDropdownYear } from './DateDropdown/DateDropdownYear/DateDropdownYear';
import { Button } from './Button';

interface DateDropdownFormValue {
  getData?: Function
}
export function DateDropdown({getData: GetData} : DateDropdownFormValue) {
  
  return (
    <div className='flex flex gap-3'>
      <DateDropdownDay/>
      <DateDropdownMonth/>
      <DateDropdownYear/>
      <Button/>
    </div>
  )
}