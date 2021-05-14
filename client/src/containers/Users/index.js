import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/Users/List';
import Pagination from '../../components/Users/Pagination';
import { actions } from '../../slice';

const index = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(actions.getUsers({ search: searchInput, page, limit: 1 }));
  }, [searchInput, page]);

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Users List
          </h1>
        </div>
        <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
          <div>
            <input
              className="w-full h-10 px-3 text-white placeholder-white bg-gray-700 border rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <UsersList data={users} />
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={users && users.totalPages}
        />
      </div>
    </section>
  );
};

export default index;
