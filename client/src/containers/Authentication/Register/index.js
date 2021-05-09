import React from 'react';
import { Link } from 'react-router-dom';

const index = ({role}) => {
    return (
        <div>
            <br/>
        <Link class="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" to={`/onboarding/${role}`}>Start Learning</Link>
        </div>
    );
};

export default index;