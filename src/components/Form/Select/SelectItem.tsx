import * as Select from '@radix-ui/react-select';

export interface SelectItemProps extends Select.SelectItemProps { }

export function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center gap-2 py-2.5 outline-none data-[highlighted]:bg-zinc-50 data-[highlighted]:text-violet-900 justify-between"
      {...props}
    >
      <Select.ItemText className="text-sm text-zinc-900">
        {children}
      </Select.ItemText>
      <Select.ItemIndicator className="text-violet-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-violet-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Select.ItemIndicator>
    </Select.Item>
  );
}