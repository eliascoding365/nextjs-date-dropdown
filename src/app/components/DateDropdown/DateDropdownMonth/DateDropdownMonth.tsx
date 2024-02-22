export function DateDropdownMonth() {
  return (
    <div>
      <select name="month" >
        <option value="">Month</option>
        {/* Options for months */}
        {Array.from({ length: 12 }, (_, index) => (index + 1).toString().padStart(2, '0'))
          .map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
      </select>
    </div>
  )
}