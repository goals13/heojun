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

  return (<div>
    <br/><br/><br/>
    <div className="a1"><br/><Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>Test Results</Typography>
      <ul>
        {/*{users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))}*/}
        <br/><h2><b> {(result.n)} </b></h2>[님의 검사 결과]<br/><br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;위 내시경&nbsp; : {convertC(result.c)}<br/><br/>
         &nbsp;&nbsp;대장 내시경 : {convertC(result.g)}<br/><br/>
         
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;흉부 CT&nbsp;&nbsp;&nbsp;&nbsp; : {convertC(result.tho)}<br/><br/>
         
         갑상선 초음파 : {convertC(result.thy)}<br/><br/>
         
         &nbsp;&nbsp;뇌혈류 검사 : {convertC(result.tc)}<br/><br/><br/>
        </ul>
      <button className="button" onClick={fetchUsers}>다시 불러오기</button>
    </div></div>
  );
}

  
  export default View;
