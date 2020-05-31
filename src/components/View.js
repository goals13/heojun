import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.scss';
import { useResultContext } from '../store/context';
import Typography from '@material-ui/core/Typography';
function View() {
  const { result, setResult } = useResultContext();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const convertC = (c) => {
    switch (c) {
      case 1:
        return '정상'
      case 2: 
        return '의심'
      case 3: 
        return '이상'
      case 4:
        return '복잡'
      default:
        return "측정범위 초과"
    }
  }

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
    if (loading) return <div>L O A D I N G..</div>;
    if (error) return <div>E R R O R</div>;
    if (!users) return null;
  console.log(users);

  return (
    <div className="a1">
      <br /><Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Test Results</Typography>
      <ul>
        {/*{users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}*/}

        <br/><br/>
         &nbsp;&nbsp;&nbsp;위 내시경 측정 결과 : {convertC(result.c)}<br/><br/>
         대장 내시경 측정 결과 : {convertC(result.g)}<br/><br/>
        </ul>
      <button className="button" onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
}

  
  export default View;
