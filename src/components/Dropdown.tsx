import { ChangeEvent, FC, useState } from 'react';

import './Dropdown.css';

type Option = Record<'key' | 'name' | 'amount', string>;
interface DropdownProps {
  /**
   * Used to display dropdown title when option is not checked
   */
  title: string;
  /**
   * Used to render array of dropdown menu option elements
   */
  options: Option[];
  /**
   * Callback when a menu item is selected
   * Not implemented as feature is out of scope, follow-up in #123
   */
  onChange?: () => void;
}

export const DropDown: FC<DropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | undefined>();

  const isDefault = !isOpen && !selectedOption;

  const clickHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(
      ev.target.checked
        ? options.find((option) => option.key === ev.target.value)
        : undefined
    );
  };

  return (
    <div className={'dropdown-layout'} data-testid='dropdown'>
      <div
        className={`dropdown-button ${
          isOpen ? 'dropdown-button-active' : 'dropdown-button-inactive'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='dropdown-button-label'>
          {!!selectedOption
            ? `${selectedOption.name} (${selectedOption.amount})`
            : title}
        </span>
        <span>
          <div
            className={`icon-container ${
              isOpen ? 'icon-active' : 'icon-inactive'
            } ${isDefault && 'icon-container-default'}`}
          >
            <span className={'icon'}>
              {isOpen ? '-' : selectedOption ? 'x' : '+'}
            </span>
          </div>
        </span>
      </div>
      {isOpen && (
        <div className={'dropdown-menu-container'}>
          {options?.map(({ key, name, amount }, index) => {
            const isChecked = selectedOption?.key === key;
            const isDisabled = !!selectedOption && !isChecked;

            return (
              <div key={index} className={'dropdown-menu-item'}>
                <span className={'dropdown-checkbox-container'}>
                  <input
                    type='checkbox'
                    className={'dropdown-checkbox'}
                    value={key}
                    onClick={(ev: any) => clickHandler(ev)}
                    defaultChecked={isChecked}
                    disabled={isDisabled}
                  />
                </span>
                <span
                  className={`dropdown-menu-item-label ${`dropdown-menu-item-${
                    isDisabled ? 'inactive' : 'active'
                  }`}`}
                >
                  {`${name} (${amount})`}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
