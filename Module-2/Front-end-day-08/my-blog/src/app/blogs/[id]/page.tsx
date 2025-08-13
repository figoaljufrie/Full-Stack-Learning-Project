import axios from "axios";

export const dynamic = "force-dynamic"; // penting agar route dinamis

export default async function BlogDetail({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;

    const blog = await axios.get(`http://172.16.3.116:3000/api/blogs/${id}`);

    const { title, author, image, content } = blog?.data?.data || {};

    return (
        <main className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-500 mb-4">{author}</p>
            <img className="w-full mb-4 rounded" src={image} alt={title} />
            <p>{content}</p>
        </main>
    );
}