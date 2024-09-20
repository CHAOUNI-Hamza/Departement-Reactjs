import React, { useState } from 'react';
import '../../../css/card.css';

export default function Professeure() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal open
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row g-2">
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center">
              <div className="img mb-2">
                <img src="https://i.imgur.com/LohyFIN.jpg" width="90" className="rounded-circle" alt="Professor" />
              </div>
              <h5 className="mb-0 mt-2">حمزة الشوني</h5>
              <small>الجغرافيا</small>
              <div className="mt-4 apointment">
                <button className="btn btn-success text-uppercase" onClick={handleModalOpen}>
                  السيرة
                </button>
              </div>
            </div>
            {/* Modal */}
      {showModal && (
        <div className="modal show fade" dir="rtl" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">سيرة حمزة الشوني</h5>
                <button type="button" className="btn-close" onClick={handleModalClose}>X</button>
              </div>
              <div className="modal-body">
                <p>
                  حمزة الشوني أستاذ متخصص في الجغرافيا وله خبرة طويلة في التدريس والبحث. درس في عدة جامعات وله العديد من الأبحاث المنشورة.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
          </div>
        </div>
      </div>
    </>
  );
}
