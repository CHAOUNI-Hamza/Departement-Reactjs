import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../css/users.css';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

function formatDate(dateString) {
    return format(new Date(dateString), 'dd MMMM yyyy', { locale: fr });
  }

function Departement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [newUserData, setNewUserData] = useState({
    nom: '',
    bio: '',
  });
  const [editUserData, setEditUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [search, currentPage]);

  const fetchData = async () => {
    setError(null);
    try {
      const response = await axios.get('/teachers', {
        params: { search, page: currentPage }
      });
      setUsers(response.data.data);
      setLastPage(response.data.meta.last_page);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('حدث خطأ أثناء جلب البيانات.');
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNewUserDataChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleEditUserDataChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({ ...editUserData, [name]: value });
  };

  const addUser = async () => {
    const { nom, bio } = newUserData;
    if (!nom || !bio ) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول المطلوبة!',
      });
      return;
    }
    try {
      await axios.post('/teachers', { nom, bio });
      fetchData();
      setNewUserData({
        nom: '',
        bio: '',
      });
      Swal.fire({
        title: "تم",
        text: "تمت إضافة النشاط الجديد بنجاح.",
        icon: "success"
      }).then(() => {
        document.getElementById('closeModalBtn').click();
      });
    } catch (error) {
      if (error.response && error.response.data.errorDate) {
        Swal.fire({
          icon: 'error',
          title: 'خطأ',
          text: error.response.data.errorDate,
        });
      } else {
        console.error('Error adding user:', error);
        setError('حدث خطأ أثناء إضافة النشاط.');
      }
    }
  };
  

  const editUser = async () => {
    try {
      const { id, nom, bio } = editUserData;
      await axios.put(`/teachers/${id}`, { nom, bio });
      fetchData();
      Swal.fire({
        title: "تم",
        text: "تم تحديث معلومات النشاط بنجاح.",
        icon: "success"
      }).then(() => {
        document.getElementById('closeEditModalBtn').click();
      });
    } catch (error) {
        if (error.response && error.response.data.errorDate) {
            Swal.fire({
              icon: 'error',
              title: 'خطأ',
              text: error.response.data.errorDate,
            });
          } else {
            console.error('Error updating user:', error);
            setError('حدث خطأ أثناء تحديث معلومات النشاط.');
          }
    }
  };

  const deleteUser = async (id) => {
    try {
      const result = await Swal.fire({
        title: "هل أنت متأكد؟",
        text: "لن تتمكن من التراجع عن هذا!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم، احذفها!"
      });

      if (result.isConfirmed) {
        await axios.delete(`/teachers/${id}`);
        fetchData();
        Swal.fire({
          title: "تم الحذف!",
          text: "تم حذف النشاط بنجاح.",
          icon: "success"
        });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('حدث خطأ أثناء حذف النشاط.');
    }
  };

  const openEditModal = (user) => {
    setEditUserData(user);
  };

  return (
    <div className="row font-arabic">
      <div className="col-12">
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          className="btn btn-success btn-flat mb-3"
          aria-label="إضافة"
          style={{ padding: '3px 11px' }}
        >
          <i className="fa fa-plus" aria-hidden="true" style={{ marginRight: '5px' }}></i>
          إضافة
        </button>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title" style={{ float: 'right' }}>لائحة الأنشطة</h3>
            <div className="card-tools" style={{ marginRight: '10rem' }}>
              <div className="input-group input-group-sm" style={{ width: '214px' }}>
                <input
                  type="text"
                  name="table_search"
                  className="form-control float-right search-input"
                  placeholder="البحث"
                  style={{ textAlign: 'right' }}
                  value={search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr style={{ textAlign: 'right' }}>
                  <th>إجراءات</th>
                  <th>الإسم</th>
                  <th>الوصف</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={{ textAlign: 'right' }}>
                    <td>
                      <a
                        href="#"
                        style={{ color: '#ff0000b3', marginRight: '10px' }}
                        aria-label="Delete"
                        onClick={() => deleteUser(user.id)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </a>
                      <a
                        type='button'
                        data-toggle="modal"
                        data-target="#editModal"
                        style={{ color: '#007bff', marginRight: '10px' }}
                        aria-label="Edit"
                        onClick={() => openEditModal(user)}
                      >
                        <i className="fa fa-edit" aria-hidden="true"></i>
                      </a>
                    </td>
                    <td>{user.nom}</td>
                    <td>{user.bio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </div>
          <div className="card-footer clearfix">
            <ul className="pagination pagination-sm m-0 float-right">
              {Array.from({ length: lastPage }, (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header" dir='rtl'>
              <h5 className="modal-title" id="exampleModalLabel">إضافة نشاط</h5>
            </div>
            <div className="modal-body" dir='rtl'>
              <form>
                <div className="form-group text-right">
                  <label htmlFor="nom">الإسم</label>
                  <input type="text" className="form-control" id="nom" name="nom" value={newUserData.nom} onChange={handleNewUserDataChange} required />
                </div>
                <div className="form-group text-right">
                  <label htmlFor="bio">الوصف</label>
                  <input type="text" className="form-control" id="bio" name="bio" value={newUserData.bio} onChange={handleNewUserDataChange} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" id="closeModalBtn" data-dismiss="modal">إلغاء</button>
              <button type="button" className="btn btn-primary" onClick={addUser}>إضافة</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      {/* Edit User Modal */}
{editUserData && (
  <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header" dir='rtl'>
          <h5 className="modal-title" id="editModalLabel">تعديل النشاط</h5>
        </div>
        <div className="modal-body" dir='rtl'>
          <form>
            <div className="form-group text-right">
              <label htmlFor="nom">الإسم</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={editUserData.nom}
                onChange={handleEditUserDataChange}
                required
              />
            </div>
            <div className="form-group text-right">
              <label htmlFor="bio">الوصف</label>
              <input
                type="text"
                className="form-control"
                id="bio"
                name="bio"
                value={editUserData.bio}
                onChange={handleEditUserDataChange}
                required
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" id="closeEditModalBtn" data-dismiss="modal">إلغاء</button>
          <button type="button" className="btn btn-primary" onClick={editUser}>تعديل</button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Departement;
