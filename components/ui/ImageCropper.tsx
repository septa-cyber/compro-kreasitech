import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop';
import Modal from './Modal';

interface ImageCropperProps {
    isOpen: boolean;
    imageSrc: string;
    onCropDone: (croppedImageFile: File) => void;
    onCropCancel: () => void;
}

export default function ImageCropper({ isOpen, imageSrc, onCropDone, onCropCancel }: ImageCropperProps) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const createImage = (url: string): Promise<HTMLImageElement> =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => resolve(image));
            image.addEventListener('error', (error) => reject(error));
            image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues
            image.src = url;
        });

    const getCroppedImg = async (
        imageSrc: string,
        pixelCrop: Area,
    ): Promise<File | null> => {
        const image = await createImage(imageSrc);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return null;
        }

        // set canvas size to match the bounding box
        canvas.width = image.width;
        canvas.height = image.height;

        // translate canvas context to a central location to allow rotating and scaling around the center
        ctx.translate(image.width / 2, image.height / 2);
        ctx.translate(-image.width / 2, -image.height / 2);

        // draw image
        ctx.drawImage(image, 0, 0);

        const croppedCanvas = document.createElement('canvas');
        const croppedCtx = croppedCanvas.getContext('2d');

        if (!croppedCtx) {
            return null;
        }

        // Set the size of the cropped canvas
        croppedCanvas.width = pixelCrop.width;
        croppedCanvas.height = pixelCrop.height;

        // Draw the cropped image onto the cropped canvas
        croppedCtx.drawImage(
            canvas,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        // As a blob
        return new Promise((resolve) => {
            croppedCanvas.toBlob((file) => {
                if (file) {
                    resolve(new File([file], 'avatar.jpg', { type: 'image/jpeg' }));
                } else {
                    resolve(null)
                }
            }, 'image/jpeg');
        });
    };

    const handleSave = async () => {
        if (!croppedAreaPixels) return;
        try {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            if (croppedImage) {
                onCropDone(croppedImage);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onCropCancel} title="Sesuaikan Posisi Foto">
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    cropShape="round"
                    showGrid={false}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <label className="text-xs text-gray-500 font-montserrat">Atur Zoom:</label>
                <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e) => {
                        setZoom(Number(e.target.value));
                    }}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>
            <div className="flex justify-end pt-6 gap-3">
                <button
                    onClick={onCropCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Batal
                </button>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors shadow-sm"
                >
                    Simpan Foto
                </button>
            </div>
        </Modal>
    );
}
