import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import Pencarian from './Layout/Pencarian';
import Home from './Layout/Home';
import TambahBarang from './Barang/TambahBarang';
import EditBarang from './Barang/EditBarang';
import BtnTambahBarang from './Layout/BtnTambahBarang';
import BtnEditBarang from './Layout/BtnEditBarang';
import BtnDeleteBarang from './Layout/BtnDeleteBarang';
import Footer from './Layout/Footer';
import DetailBarang from './Barang/DetailBarang';

import {Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import api from './api/inventaris';

function App() {
  const [lists, setLists] = useState([]);
  const [namaBarang, setNamaBarang] = useState("");
  const [kategori, setKategori] = useState("");
  const [stock, setStock] = useState("");
  const [hargaPerolehan, setHargaPerolehan] = useState("");

  const [editNamaBarang, setEditNamaBarang] = useState("");
  const [editKategori, setEditKategori] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editHargaPerolehan, setEditHargaPerolehan] = useState("");

  const [pencarian, setPencarian] = useState("");
  const [hasilPencarian, setHasilPencarian] =useState([]);

  const history = useHistory();
  
  useEffect(() => {
      const fetchInventaris = async () =>{
        try {
          const response = await api.get('/daftar');
          setLists(response.data);

        } catch (err) {
          if(err.response){
            //not in the 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
          }else{
            console.log(`Error: ${err.message}`);
          }
        }
      }

      fetchInventaris();
    }, []);

  useEffect(() => {
    const filterPencarian = lists.filter
    (item =>
      ((item.nama_barang).toLowerCase()).includes(pencarian.toLowerCase()) ||
      ((item.kategori).toLowerCase()).includes(pencarian.toLowerCase())
    );
    setHasilPencarian(filterPencarian.reverse());
  },[lists, pencarian]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextID = lists.length > 0 ? lists[lists.length - 1].id + 1 : 1;
    const newItem = {id:nextID, nama_barang:namaBarang, kategori:kategori, stock:stock, harga_perolehan:hargaPerolehan}
    
    try {
      const response = await api.post("/daftar", newItem);
      const result = [...lists, response.data];
      setLists(result);
      setNamaBarang('');
      setKategori('');
      setStock('0');
      setHargaPerolehan('0');
      history.push("/");

    } catch (error) {
      console.log(`Error: ${error.message}`);

    }
  }

  const handleDelete = async (id) => {
    try {
      if(window.confirm("Yakin ingin menghapus data?")){
        await api.delete(`/daftar/${id}`);
        const result = lists.filter(item=>item.id !== id);
        setLists(result);
        history.push("/");
      }

    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  const handleEdit = async (id) => {
    const updatedItem = {id, nama_barang: editNamaBarang, kategori:editKategori, stock:editStock, harga_perolehan:editHargaPerolehan}
    try {
      const response = await api.put(`/daftar/${id}`, updatedItem);
      setLists(lists.map(item=>item.id === id ? {...response.data} : item));
      setEditNamaBarang('');
      setEditKategori('');
      setEditStock('0');
      setEditHargaPerolehan('0');
      history.push(`/row/${id}`);

    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  return (
    <div className="App">
      <Header judul="Inventory Management System" />
      <Navigation />
      <Switch>

        <Route exact path="/">
          <Pencarian 
            pencarian={pencarian}
            setPencarian={setPencarian} 
          />

          <Home lists={hasilPencarian} />
          <BtnTambahBarang judul="Add" />
        </Route>

        <Route exact path="/row/add">
          <TambahBarang 
            handleSubmit={handleSubmit}
            namaBarang={namaBarang}
            setNamaBarang={setNamaBarang}
            kategori={kategori}
            setKategori={setKategori}
            stock={stock}
            setStock={setStock}
            hargaPerolehan={hargaPerolehan}
            setHargaPerolehan={setHargaPerolehan}
          />
        </Route>

        <Route exact path="/row/:id/edit">
          <EditBarang 
            lists={lists}
            handleEdit={handleEdit}
            editNamaBarang={editNamaBarang}
            setEditNamaBarang={setEditNamaBarang}
            editKategori={editKategori}
            setEditKategori={setEditKategori}
            editStock={editStock}
            setEditStock={setEditStock}
            editHargaPerolehan={editHargaPerolehan}
            setEditHargaPerolehan={setEditHargaPerolehan}
          />
        </Route>

        <Route path="/row/:id">
          <DetailBarang 
            lists={lists}
            handleDelete={handleDelete}
          />
          <BtnEditBarang judul="Edit" />
          
          <BtnDeleteBarang 
            lists={lists}
            handleDelete={handleDelete}
            judul="Delete" />
        </Route>

      </Switch>      

      <Footer judul="Copyright 2022 - Berdikari Project Development" />
    </div>
  );
}

export default App;
