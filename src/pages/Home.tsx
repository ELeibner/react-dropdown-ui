import { DropDown } from '../components';
import { dropdownMockData } from '../data/dropdown';

import './Home.css';

export default function Home() {
  return (
    <div data-testid='home' className={'container'}>
      <DropDown {...dropdownMockData} />
    </div>
  );
}
