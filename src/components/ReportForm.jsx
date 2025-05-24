import React, { useState } from 'react';
import bgpict from '../assets/pantai.svg';

export const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    address: '',
    wasteType: '',
    volume: '',
    notes: '',
    evidence: null
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setShowSuccess(true); // tampilkan alert custom

    // reset form
    setFormData({
      name: '',
      contact: '',
      date: '',
      address: '',
      wasteType: '',
      volume: '',
      notes: '',
      evidence: null
    });
  };

  return (
    <section id="report" className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[#b9a183f9] bg-cover bg-center opacity-70" 
          style={{ backgroundImage: `url(${bgpict})` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">
          Pelaporan Sampah
        </h2>

        {showSuccess ? (
          <div className="max-w-md mx-auto bg-[#eaf9ff] text-center p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Pelaporanmu telah berhasil dikirim
            </h3>
            <p className="text-gray-600 mb-4">
              Terima kasih atas kepedulianmu terhadap kebersihan lingkungan. Setiap tindakan kecilmu sangat berarti untuk bumi yang lebih baik!
            </p>
            <button
              className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500"
              onClick={() => setShowSuccess(false)}
            >
              SELESAI
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Pelapor:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Kontak:
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal & Waktu:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Lokasi:
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipe Sampah:
                  </label>
                  <input
                    type="text"
                    id="wasteType"
                    name="wasteType"
                    value={formData.wasteType}
                    onChange={handleChange}
                    placeholder="Plastik, Organik, dll."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah dan Perkiraan Volume:
                  </label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="Misal: 3 karung besar"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Keterangan Tambahan:
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 bg-[#F2FDFF]"
                  />
                </div>

                <div>
                  <label htmlFor="evidence" className="block text-sm font-medium text-gray-700 mb-1">
                    Bukti Pendukung:
                  </label>
                  <input
                    type="file"
                    id="evidence"
                    name="evidence"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md bg-white
                               focus:outline-none focus:ring-2 focus:ring-teal-500 file:mr-4 file:py-2 file:px-4
                               file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#F2FDFF]"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition-colors duration-300 w-full md:w-auto"
                  >
                    AJUKAN
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
