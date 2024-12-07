import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Skeleton } from 'antd';
import { DatePicker } from 'antd';
import claneService from './shared/services/clane-store.service'

//pages
import { Shop, Home, Featured, Blogs } from "./pages";

//components
import { Header, Footer } from "./components";

function App() {
  const [dataFetch, setDataFetch] = useState(null);
  const [loading, setLoading] = useState(true);
  claneService.stateSubject.subscribe((value) => console.log(value));

  useEffect(() => {
    // Sử dụng Fetch API để lấy dữ liệu từ API
    axios.get('https://jsonplaceholder.typicode.com/todos/5')
      .then((res) => {
        setDataFetch(res.data);
        console.log(res.data, 'sdsd')
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  function handleUpdate() {
    console.log('clicked');
    claneService.stateSubject.next(`${Math.random()}`);
  }

  return (
    <div>
      <Header />
      <Skeleton active />
      {'wwww'}
      <button onClick={handleUpdate}>click</button>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
