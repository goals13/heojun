import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.scss';

function View() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        'http://3.34.5.242:5000/TEST2'
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      console.log(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  console.log(users);

  return (
    <>
      <ul>
        {users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

  
  export default View;
