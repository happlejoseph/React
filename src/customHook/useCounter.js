

import { useState } from 'react';

const useCounter = ()=> {
    const [count, setCount] = useState(0);
    
    const add = ()=> {
        setCount(count + 1);
    };

    return { count, add };
};

export default useCounter