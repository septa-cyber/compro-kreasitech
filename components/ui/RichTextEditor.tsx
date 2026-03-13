"use client";

import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent, ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Markdown } from 'tiptap-markdown';
import { Extension } from '@tiptap/react';
import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaStrikethrough,
    FaHeading,
    FaListUl,
    FaListOl,
    FaQuoteLeft,
    FaCode,
    FaLink,
    FaImage,
    FaMinus,
    FaUndo,
    FaRedo,
    FaUpload,
    FaSpinner,
    FaAlignLeft,
    FaAlignCenter,
    FaAlignRight,
    FaAlignJustify,
    FaFont,
    FaChevronDown,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

interface RichTextEditorProps {
    content: string;
    onChange: (markdown: string) => void;
    placeholder?: string;
}

// -------- FontSize Extension --------
const FontSize = Extension.create({
    name: 'fontSize',

    addOptions() {
        return { types: ['textStyle'] };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: (element: HTMLElement) => element.style.fontSize?.replace(/['"]+/g, ''),
                        renderHTML: (attributes: Record<string, any>) => {
                            if (!attributes.fontSize) return {};
                            return { style: `font-size: ${attributes.fontSize}` };
                        },
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize: (fontSize: string) => ({ chain }: any) => {
                return chain().setMark('textStyle', { fontSize }).run();
            },
            unsetFontSize: () => ({ chain }: any) => {
                return chain().setMark('textStyle', { fontSize: null }).removeEmptyTextStyle().run();
            },
        } as any;
    },
});

// -------- Custom Image Node with Alignment & Resize --------
const CustomImage = Image.extend({
    inline() {
        return false;
    },
    group() {
        return 'block';
    },
    addAttributes() {
        return {
            ...this.parent?.(),
            alt: { default: null },
            title: { default: null },
            width: { default: null },
            alignment: { default: 'center' },
        };
    },
    addNodeView() {
        return ReactNodeViewRenderer(ImageNode);
    },
});

function ImageNode(props: any) {
    const { node, updateAttributes, selected } = props;
    const [isResizing, setIsResizing] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const startX = useRef(0);
    const startWidth = useRef(0);

    const alignment = node.attrs.alignment || 'center';
    const width = node.attrs.width;

    const justifyClass =
        alignment === 'left' ? 'items-start' :
            alignment === 'right' ? 'items-end' :
                'items-center';

    const handleResizeStart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsResizing(true);
        startX.current = e.clientX;
        startWidth.current = imgRef.current?.offsetWidth || 300;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const diff = moveEvent.clientX - startX.current;
            const newWidth = Math.max(100, startWidth.current + diff);
            updateAttributes({ width: `${newWidth}px` });
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <NodeViewWrapper as="div" className={`flex flex-col ${justifyClass} py-4 my-4 group relative`}>
            {/* Alignment Controls */}
            {selected && (
                <div className="flex items-center gap-1 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm px-1 py-0.5">
                    <button
                        type="button"
                        onClick={() => updateAttributes({ alignment: 'left' })}
                        className={`p-1.5 rounded text-xs transition-colors ${alignment === 'left' ? 'bg-violet-100 text-violet-700' : 'text-gray-500 hover:bg-gray-100'}`}
                        title="Align Left"
                    >
                        <FaAlignLeft size={11} />
                    </button>
                    <button
                        type="button"
                        onClick={() => updateAttributes({ alignment: 'center' })}
                        className={`p-1.5 rounded text-xs transition-colors ${alignment === 'center' ? 'bg-violet-100 text-violet-700' : 'text-gray-500 hover:bg-gray-100'}`}
                        title="Align Center"
                    >
                        <FaAlignCenter size={11} />
                    </button>
                    <button
                        type="button"
                        onClick={() => updateAttributes({ alignment: 'right' })}
                        className={`p-1.5 rounded text-xs transition-colors ${alignment === 'right' ? 'bg-violet-100 text-violet-700' : 'text-gray-500 hover:bg-gray-100'}`}
                        title="Align Right"
                    >
                        <FaAlignRight size={11} />
                    </button>
                </div>
            )}
            <div className="relative inline-block" style={{ width: width || 'auto', maxWidth: '100%' }}>
                <img
                    ref={imgRef}
                    src={node.attrs.src}
                    alt={node.attrs.alt || ''}
                    title={node.attrs.title || ''}
                    data-drag-handle
                    style={{ width: width || 'auto', maxWidth: '100%' }}
                    className={`rounded-xl object-contain transition-all cursor-pointer ${selected ? 'ring-4 ring-emerald-500 ring-offset-2' : ''
                        }`}
                />
                {/* Resize Handle */}
                {selected && (
                    <div
                        onMouseDown={handleResizeStart}
                        className="absolute bottom-0 right-0 w-4 h-4 bg-violet-500 rounded-tl-md cursor-se-resize flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                        title="Drag to resize"
                    >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
                            <path d="M7 1L1 7M7 4L4 7M7 7L7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                )}
            </div>
            <input
                type="text"
                placeholder="Type caption for image (optional)"
                className="text-center bg-transparent text-sm text-gray-400 border-none focus:outline-none focus:ring-0 mt-2 font-montserrat px-2"
                style={{ width: width || '100%', maxWidth: '100%' }}
                value={node.attrs.alt || ''}
                onChange={(e) => updateAttributes({ alt: e.target.value })}
                onKeyDown={(e) => {
                    e.stopPropagation();
                }}
            />
        </NodeViewWrapper>
    );
}

// -------- Toolbar Button --------
function ToolbarButton({
    onClick,
    isActive = false,
    disabled = false,
    title,
    children,
}: {
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`p-2 rounded-md transition-colors text-sm ${isActive
                ? 'bg-violet-100 text-violet-700'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                } ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        >
            {children}
        </button>
    );
}

function ToolbarDivider() {
    return <div className="w-px h-6 bg-gray-200 mx-1" />;
}

// -------- Font Size Dropdown --------
const FONT_SIZES = [
    { label: '12', value: '12px' },
    { label: '14', value: '14px' },
    { label: '16', value: '16px' },
    { label: '18', value: '18px' },
    { label: '20', value: '20px' },
    { label: '24', value: '24px' },
    { label: '28', value: '28px' },
    { label: '32', value: '32px' },
];

function FontSizeDropdown({ editor }: { editor: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [customSize, setCustomSize] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentFontSize = editor?.getAttributes('textStyle')?.fontSize || '';

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                title="Font Size"
                className={`px-2 py-1.5 rounded-md transition-colors text-sm flex items-center gap-1.5 cursor-pointer border ${currentFontSize ? 'border-violet-300 bg-violet-50 text-violet-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
            >
                <span className="text-xs font-medium">{currentFontSize ? currentFontSize.replace('px', '') : 'Size'}</span>
                <FaChevronDown size={10} className="text-gray-400" />
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-24 py-1 font-montserrat">
                    <div className="px-2 py-1.5 border-b border-gray-100 mb-1">
                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                min="8"
                                max="100"
                                value={customSize}
                                onChange={(e) => setCustomSize(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && customSize) {
                                        e.preventDefault();
                                        (editor.commands as any).setFontSize(`${customSize}px`);
                                        editor.chain().focus().run();
                                        setIsOpen(false);
                                        setCustomSize('');
                                    }
                                }}
                                className="w-full px-2 py-1 text-xs border border-gray-200 rounded outline-none focus:border-violet-500"
                                placeholder="Size..."
                            />
                            <span className="text-xs text-gray-400">px</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            (editor.commands as any).unsetFontSize();
                            editor.chain().focus().run();
                            setIsOpen(false);
                        }}
                        className="w-full px-3 py-1.5 text-left text-xs text-gray-500 hover:bg-violet-50 hover:text-violet-700 transition-colors"
                    >
                        Default
                    </button>
                    {FONT_SIZES.map((size) => (
                        <button
                            key={size.value}
                            type="button"
                            onClick={() => {
                                (editor.commands as any).setFontSize(size.value);
                                editor.chain().focus().run();
                                setIsOpen(false);
                            }}
                            className={`w-full px-3 py-1.5 text-left text-xs transition-colors ${currentFontSize === size.value
                                ? 'bg-violet-100 text-violet-700 font-semibold'
                                : 'text-gray-700 hover:bg-violet-50 hover:text-violet-700'
                                }`}
                        >
                            {size.label}px
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// -------- Main Editor --------
export default function RichTextEditor({ content, onChange, placeholder = 'Tulis konten artikel di sini...' }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: { levels: [1, 2, 3] },
                codeBlock: {
                    HTMLAttributes: { class: 'bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono' },
                },
                blockquote: {
                    HTMLAttributes: { class: 'border-l-4 border-violet-400 pl-4 italic text-gray-600' },
                },
            }),
            Underline,
            TextStyle,
            FontSize,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: { class: 'text-violet-600 underline cursor-pointer' },
            }),
            CustomImage.configure({
                HTMLAttributes: { class: 'rounded-xl max-w-full mx-auto object-contain' },
            }),
            Placeholder.configure({ placeholder }),
            Markdown.configure({
                html: true,
                transformPastedText: true,
                transformCopiedText: true,
            }),
        ],
        content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose-base prose-slate max-w-none focus:outline-none min-h-[300px] px-4 py-3 prose-headings:font-montserrat prose-p:text-gray-700 prose-a:text-violet-600 prose-img:max-w-full prose-img:mx-auto prose-img:rounded-xl prose-img:object-contain',
            },
        },
        onUpdate: ({ editor }) => {
            const md = (editor.storage as any).markdown.getMarkdown();
            onChange(md);
        },
        immediatelyRender: false,
    });

    const setLink = useCallback(() => {
        if (!editor) return;
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL:', previousUrl);

        if (url === null) return;
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    const addImage = useCallback(() => {
        if (!editor) return;
        const url = window.prompt('Image URL:');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    // --- Image upload from device ---
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [showImageMenu, setShowImageMenu] = useState(false);
    const imageMenuRef = useRef<HTMLDivElement>(null);

    const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !editor) return;

        if (!file.type.startsWith('image/')) {
            toast.error('File harus berupa gambar');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error('Ukuran gambar maksimal 5MB');
            return;
        }

        setIsUploadingImage(true);
        setShowImageMenu(false);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                editor.chain().focus().setImage({ src: data.url }).run();
                toast.success('Gambar berhasil ditambahkan!');
            } else {
                toast.error('Gagal mengunggah gambar');
            }
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Terjadi kesalahan saat mengunggah');
        } finally {
            setIsUploadingImage(false);
            // Reset file input
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    }, [editor]);

    const handleImageUrlInsert = useCallback(() => {
        if (!editor) return;
        setShowImageMenu(false);
        const url = window.prompt('Masukkan URL gambar:');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    // Close image menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (imageMenuRef.current && !imageMenuRef.current.contains(e.target as Node)) {
                setShowImageMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!editor) return null;

    const toggleSmartHeading = (level: 1 | 2 | 3) => {
        const isInList = editor.isActive('bulletList') || editor.isActive('orderedList');
        if (isInList) {
            const sizeMap = { 1: '32px', 2: '24px', 3: '20px' };
            const targetSize = sizeMap[level];
            const isPseudo = editor?.getAttributes('textStyle')?.fontSize === targetSize && editor.isActive('bold');
            
            if (isPseudo) {
                (editor.commands as any).unsetFontSize();
                editor.chain().focus().unsetMark('bold').run();
            } else {
                (editor.commands as any).setFontSize(targetSize);
                editor.chain().focus().setMark('bold').run();
            }
        } else {
            editor.chain().focus().toggleHeading({ level }).run();
        }
    };

    const isSmartHeadingActive = (level: 1 | 2 | 3) => {
        const isInList = editor.isActive('bulletList') || editor.isActive('orderedList');
        if (isInList) {
            const sizeMap = { 1: '32px', 2: '24px', 3: '20px' };
            return editor?.getAttributes('textStyle')?.fontSize === sizeMap[level] && editor.isActive('bold');
        }
        return editor.isActive('heading', { level });
    };

    return (
        <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-violet-500/50 focus-within:border-violet-500 transition-all">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 bg-gray-50 border-b border-gray-200 rounded-t-lg">
                {/* Undo / Redo */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    title="Undo"
                >
                    <FaUndo size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    title="Redo"
                >
                    <FaRedo size={12} />
                </ToolbarButton>

                <ToolbarDivider />

                {/* Text Formatting */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive('bold')}
                    title="Bold"
                >
                    <FaBold size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive('italic')}
                    title="Italic"
                >
                    <FaItalic size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={editor.isActive('underline')}
                    title="Underline"
                >
                    <FaUnderline size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    isActive={editor.isActive('strike')}
                    title="Strikethrough"
                >
                    <FaStrikethrough size={12} />
                </ToolbarButton>

                <ToolbarDivider />

                {/* Font Size */}
                <FontSizeDropdown editor={editor} />

                <ToolbarDivider />

                {/* Text Alignment */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    isActive={editor.isActive({ textAlign: 'left' })}
                    title="Align Left"
                >
                    <FaAlignLeft size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    isActive={editor.isActive({ textAlign: 'center' })}
                    title="Align Center"
                >
                    <FaAlignCenter size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    isActive={editor.isActive({ textAlign: 'right' })}
                    title="Align Right"
                >
                    <FaAlignRight size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    isActive={editor.isActive({ textAlign: 'justify' })}
                    title="Justify"
                >
                    <FaAlignJustify size={12} />
                </ToolbarButton>

                <ToolbarDivider />

                {/* Headings */}
                <ToolbarButton
                    onClick={() => toggleSmartHeading(1)}
                    isActive={isSmartHeadingActive(1)}
                    title="Heading 1"
                >
                    <span className="font-bold text-xs flex items-center"><FaHeading size={12} /><span className="ml-0.5">1</span></span>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => toggleSmartHeading(2)}
                    isActive={isSmartHeadingActive(2)}
                    title="Heading 2"
                >
                    <span className="font-bold text-xs flex items-center"><FaHeading size={12} /><span className="ml-0.5">2</span></span>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => toggleSmartHeading(3)}
                    isActive={isSmartHeadingActive(3)}
                    title="Heading 3"
                >
                    <span className="font-bold text-xs flex items-center"><FaHeading size={12} /><span className="ml-0.5">3</span></span>
                </ToolbarButton>

                <ToolbarDivider />

                {/* Lists */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive('bulletList')}
                    title="Bullet List"
                >
                    <FaListUl size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive('orderedList')}
                    title="Ordered List"
                >
                    <FaListOl size={12} />
                </ToolbarButton>

                <ToolbarDivider />

                {/* Block Elements */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={editor.isActive('blockquote')}
                    title="Blockquote"
                >
                    <FaQuoteLeft size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    isActive={editor.isActive('codeBlock')}
                    title="Code Block"
                >
                    <FaCode size={12} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    title="Horizontal Rule"
                >
                    <FaMinus size={12} />
                </ToolbarButton>

                <ToolbarDivider />

                {/* Link & Image */}
                <ToolbarButton
                    onClick={setLink}
                    isActive={editor.isActive('link')}
                    title="Insert Link"
                >
                    <FaLink size={12} />
                </ToolbarButton>

                {/* Image with dropdown */}
                <div className="relative" ref={imageMenuRef}>
                    <ToolbarButton
                        onClick={() => setShowImageMenu(!showImageMenu)}
                        disabled={isUploadingImage}
                        title="Insert Image"
                    >
                        {isUploadingImage ? (
                            <FaSpinner size={12} className="animate-spin" />
                        ) : (
                            <FaImage size={12} />
                        )}
                    </ToolbarButton>

                    {showImageMenu && (
                        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48 py-1 font-montserrat sm:left-auto sm:right-0">
                            <button
                                type="button"
                                onClick={() => {
                                    setShowImageMenu(false);
                                    fileInputRef.current?.click();
                                }}
                                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 flex items-center gap-2 transition-colors"
                            >
                                <FaUpload size={11} />
                                Upload dari Device
                            </button>
                            <button
                                type="button"
                                onClick={handleImageUrlInsert}
                                className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 flex items-center gap-2 transition-colors"
                            >
                                <FaLink size={11} />
                                Dari URL
                            </button>
                        </div>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} />
        </div>
    );
}
