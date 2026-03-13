import React from "react";
import { BlogPost } from "@/data/blogData";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface ArticleContentProps {
    post: BlogPost;
}

export default function ArticleContent({ post }: ArticleContentProps) {
    return (
        <article className="bg-white pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Cover Image */}
                <div className="mb-12 rounded-xl overflow-hidden shadow-sm aspect-[21/9] relative">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-slate hover:prose-a:text-violet-600 prose-headings:font-montserrat prose-p:font-montserrat prose-p:text-gray-600 prose-a:text-violet-600 max-w-none prose-img:max-h-[500px] prose-img:max-w-full prose-img:mx-auto prose-img:rounded-xl prose-img:object-contain">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            p: ({ node, children, style, className, ...props }) => {
                                const hasImage = node?.children?.some(
                                    (child: any) => child.tagName === 'img' || child.type === 'element' && child.tagName === 'img'
                                );
                                if (hasImage) {
                                    return <div className={className} style={style} {...props}>{children}</div>;
                                }
                                return <p className={className} style={style} {...props}>{children}</p>;
                            },
                            img: ({ node, style, className, width, ...props }) => {
                                // Extract width from style or props if it was set via TipTap drag-resize
                                const imgWidth = style?.width || width || 'auto';
                                // Determine text alignment based on parent or class (ReactMarkdown doesn't perfectly pass parent alignment to figure, but we can center it by default)

                                return (
                                    <figure className="my-8 flex flex-col items-center">
                                        <img style={style} width={width} className={`max-w-full ${className || ''}`} {...props} />
                                        {props.alt && (
                                            <figcaption 
                                                className="text-sm text-gray-500 mt-2 font-montserrat px-2 text-center"
                                                style={{ width: imgWidth, maxWidth: '100%' }}
                                            >
                                                {props.alt}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            },
                            span: ({ node, children, style, className, ...props }) => {
                                return <span style={style} className={className} {...props}>{children}</span>;
                            },
                            div: ({ node, children, style, className, ...props }) => {
                                return <div style={style} className={className} {...props}>{children}</div>;
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}

