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
                <div className="prose prose-lg prose-slate hover:prose-a:text-violet-600 prose-headings:font-montserrat prose-p:font-montserrat prose-p:text-gray-600 prose-a:text-violet-600 max-w-none prose-img:rounded-xl">
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            p: ({ node, children, style, className, ...props }: any) => {
                                const hasImage = node?.children?.some(
                                    (child: any) => child.tagName === 'img' || (child.type === 'element' && child.tagName === 'img')
                                );
                                if (hasImage) {
                                    return <div className={className} style={style} {...props}>{children}</div>;
                                }
                                return <p className={className} style={style} {...props}>{children}</p>;
                            },
                            img: ({ node, style, className, width, ...props }: any) => {
                                // Extract width and alignment from props or style
                                // props.width might come from the 'width' attribute
                                // style.width might come from the 'style' attribute (via rehype-raw)
                                const imgWidth = props.width || style?.width || '100%';
                                const alignment = props['data-align'] || props.alignment || (style?.textAlign) || 'center';
                                
                                const justifyClass = 
                                    alignment === 'left' ? 'items-start' : 
                                    alignment === 'right' ? 'items-end' : 
                                    'items-center';

                                return (
                                    <figure className={`my-10 flex flex-col ${justifyClass} w-full`}>
                                        <div style={{ width: imgWidth, maxWidth: '100%' }} className="relative">
                                            <img 
                                                style={{ height: 'auto', display: 'block', ...style, width: '100%' }} 
                                                className={`rounded-2xl shadow-md ${className || ''}`} 
                                                {...props} 
                                            />
                                            {props.alt && (
                                                <figcaption 
                                                    className="text-sm text-gray-500 mt-4 font-montserrat italic text-center px-4 w-full"
                                                >
                                                    {props.alt}
                                                </figcaption>
                                            )}
                                        </div>
                                    </figure>
                                );
                            },
                            span: ({ node, children, style, className, ...props }: any) => {
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

