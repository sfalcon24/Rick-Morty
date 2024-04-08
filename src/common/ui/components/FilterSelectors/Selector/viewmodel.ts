import {useState} from 'react';

const useViewModel = (onPressLeft: () => void) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
    onPressLeft && onPressLeft();
  };

  return {
    handleCheckboxPress,
  };
};

export default useViewModel;
