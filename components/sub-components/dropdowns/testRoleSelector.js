import { useState } from 'react';

export function TestRoleSelector({ data, label }) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className=''>
      {console.log(selected)}
      <label
        htmlFor={label}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
      >
        Select a {label} :
      </label>
      <select
        id={label}
        defaultValue={selected}
        className='bg-surfacePrimary text-textPrimary text-sm rounded-lg block w-full p-2 placeholder-slate-500-400 '
        required
      >
        {data.map((i) => (
          <option
            key={i}
            className='p-4'
            onClick={() => {
              setSelected(i);
              console.log(selected);
            }}
          >
            {i}
          </option>
        ))}
      </select>
    </div>
  );
}
