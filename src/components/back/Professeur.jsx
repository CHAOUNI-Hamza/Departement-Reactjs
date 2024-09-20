import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../../css/users.css';

function Professeur() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [newUserData, setNewUserData] = useState({
        photo: '',
        nom: '',
        prenom: '',
        bio: '',
        departement_id: '',
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
        const { photo, nom, prenom, bio, status, departement_id } = newUserData;
        if (!photo || !nom || !prenom || !bio || !status || !departement_id ) {
            Swal.fire({
                icon: 'error',
                title: 'خطأ',
                text: 'يرجى ملء جميع الحقول المطلوبة!',
            });
            return;
        }
        try {
            await axios.post('/teachers', { photo, nom, prenom, departement_id });
            fetchData();
            setNewUserData({
                photo: '',
        nom: '',
        prenom: '',
        bio: '',
        departement_id: '',
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
            const { id, photo, nom, prenom, bio, departement_id } = editUserData;
            await axios.put(`/mobilitys/${id}`, { photo, nom, prenom, bio, departement_id });
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
                await axios.delete(`/mobilitys/${id}`);
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
                        <h3 className="card-title" style={{ float: 'right' }}> الأساتذة</h3>
                        <div className="card-tools" style={{ marginRight: '10rem' }}>
                            <div className="input-group input-group-sm" style={{ width: '214px' }}>
                                <input
                                    type="text"
                                    name="table_search"
                                    className="form-control float-right search-input"
                                    placeholder="البحث بالنسب"
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
                                    <th>الصورة</th>
                                    <th>الوصف</th>
                                    <th>النسب</th>
                                    <th>الإسم</th>
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
                                        <td>{user.photo}</td>
                                        <td>{user.bio}</td>
                                        <td>{user.nom}</td>
                                        <td>{user.prenom}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-left">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage - 1)}>&laquo;</a>
                            </li>
                            {[...Array(lastPage)].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === lastPage ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Modal for adding user */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" dir='rtl'>
                            <h5 className="modal-title text-left" id="exampleModalLabel">إضافة  </h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group text-right">
                                    <label htmlFor="prenom">الإسم</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="prenom"
                                        name="prenom"
                                        value={newUserData.prenom}
                                        onChange={handleNewUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="nom">النسب </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nom"
                                        name="nom"
                                        value={newUserData.nom}
                                        onChange={handleNewUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="bio">الوصف</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="bio"
                                        name="bio"
                                        value={newUserData.bio}
                                        onChange={handleNewUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="photo">الصورة</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="photo"
                                        name="photo"
                                        value={newUserData.bio}
                                        onChange={handleNewUserDataChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">إغلاق</button>
                            <button type="button" className="btn btn-primary" onClick={addUser}>إضافة</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal for editing user */}
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">  </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="closeEditModalBtn">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group text-right">
                                    <label htmlFor="edit_prenom">الإسم </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit_prenom"
                                        name="prenom"
                                        value={editUserData?.prenom || ''}
                                        onChange={handleEditUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="edit_nom"> النسب</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit_nom"
                                        name="nom"
                                        value={editUserData?.nom || ''}
                                        onChange={handleEditUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="edit_bio"> الوصف</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit_bio"
                                        name="bio"
                                        value={editUserData?.bio || ''}
                                        onChange={handleEditUserDataChange}
                                    />
                                </div>
                                <div className="form-group text-right">
                                    <label htmlFor="edit_photo"> الصورة</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edit_photo"
                                        name="photo"
                                        value={editUserData?.photo || ''}
                                        onChange={handleEditUserDataChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">إغلاق</button>
                            <button type="button" className="btn btn-primary" onClick={editUser}>حفظ التعديلات</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Professeur;

