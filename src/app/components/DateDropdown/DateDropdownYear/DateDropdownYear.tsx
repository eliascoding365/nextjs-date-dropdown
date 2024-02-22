
interface DateDropdownProps {
  showNextTenYears?: boolean
}

export function DateDropdownYear ({showNextTenYears : ShownNextTenYears}: DateDropdownProps){

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const margin10Years = ShownNextTenYears ? currentYear + 10 : currentYear;
    //const margin60Years = showPrevious60Years ? currentYear - 60 : currentYear
    const startYear = 1901;
    return Array.from({ length: margin10Years - startYear + 1 }, (_, index) => margin10Years - index);
  };
  return (
    <div>
      <select 
      name="year" 
      >
        <option 
        value=""
        
        >
        Year
        </option>
        {/* Options for years */}
      
        {getYears().map((year) =>
         (
          <option
           key={year}
           value={year}
           
           >
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}
