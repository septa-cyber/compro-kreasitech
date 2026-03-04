"use client";

import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent, ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { Markdown } from 'tiptap-markdown';
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
} from 'react-icons/fa';
import toast from 'react-hot-toast';

interface RichTextEditorProps {
    content: string;
    onChange: (markdown: string) => void;
    placeholder?: string;
}

// -------- Custom Image Node --------
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
        };
    },
    addNodeView() {
        return ReactNodeViewRenderer(ImageNode);
    },
});

function ImageNode(props: any) {
    const { node, updateAttributes, selected } = props;

    return (
        <NodeViewWrapper as="div" className="flex flex-col items-center py-4 my-4 group relative">
            <img
                src={node.attrs.src}
                alt={node.attrs.alt || ''}
                title={node.attrs.title || ''}
                data-drag-handle
                className={`max-h-[500px] w-auto max-w-full rounded-xl object-contain mx-auto transition-all cursor-pointer ${selected ? 'ring-4 ring-emerald-500 ring-offset-2' : ''
                    }`}
            />
            <input
                type="text"
                placeholder="Type caption for image (optional)"
                className="w-full max-w-xl text-center bg-transparent text-sm text-gray-400 border-none focus:outline-none focus:ring-0 mt-3 font-montserrat"
                value={node.attrs.alt || ''}
                onChange={(e) => updateAttributes({ alt: e.target.value })}
                onKeyDown={(e) => {
                    // Prevent tiptap from overriding standard typing
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
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: { class: 'text-violet-600 underline cursor-pointer' },
            }),
            CustomImage.configure({
                HTMLAttributes: { class: 'rounded-xl max-h-[500px] max-w-full mx-auto object-contain' },
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
                class: 'prose prose-sm sm:prose-base prose-slate max-w-none focus:outline-none min-h-[300px] px-4 py-3 prose-headings:font-montserrat prose-p:text-gray-700 prose-a:text-violet-600 prose-img:max-h-[500px] prose-img:max-w-full prose-img:mx-auto prose-img:rounded-xl prose-img:object-contain',
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

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-violet-500/50 focus-within:border-violet-500 transition-all">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 bg-gray-50 border-b border-gray-200">
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
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={editor.isActive('heading', { level: 1 })}
                    title="Heading 1"
                >
                    <span className="font-bold text-xs flex items-center"><FaHeading size={12} /><span className="ml-0.5">1</span></span>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor.isActive('heading', { level: 2 })}
                    title="Heading 2"
                >
                    <span className="font-bold text-xs flex items-center"><FaHeading size={12} /><span className="ml-0.5">2</span></span>
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editor.isActive('heading', { level: 3 })}
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
