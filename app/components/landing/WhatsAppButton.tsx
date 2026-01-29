import React from 'react';

export default function WhatsAppButton() {
    return (
        <a
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce cursor-pointer"
            href="https://wa.me/6288880888877?text=Halo%20Kreasitech%2C%20saya%20ingin%20bertanya"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp text-2xl"></i>
        </a>
    );
}
