export type DropdownOption = {
  readonly value: string;
  readonly label: string;
};

export type DropdownProps = {
  readonly label: string;
  readonly option?: DropdownOption;
  readonly options: DropdownOption[];
  readonly closeOnSelect?: boolean;
  readonly onOptionSelect: (value: DropdownOption) => void;
};
