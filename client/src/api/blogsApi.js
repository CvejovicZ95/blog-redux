const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getBlogs = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/blogs`)
        const data = await res.json()
        if (data.error) {
            throw new Error(data.message)
        }
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createBlog = async (title, content, userId) => {
    try {
        const response = await fetch(`${apiUrl}/api/blogs`, {
            method: "POST",
             headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
                userId
            }),
        })

        const data = await response.json()
        if (!response.ok) {
            throw new Error(data.error || "Failed to create blog");
          }
        return data;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw error;
    }
}

export const updateReactionsOnPost = async (id, emoji) => {
    try {
        const response = await fetch(`${apiUrl}/api/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ emoji }),  
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Failed to update reactions");
        }
        return data;
    } catch (error) {
        console.error("Error updating reactions:", error);
        throw error;
    }
};

export const updateWholeBlog = async (id, title, content, reactions, userId) => {
    try {
        const response = await fetch(`${apiUrl}/api/blogs/wholeBlog/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content,
                reactions,
                userId
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Failed to update blog");
        }
        return data;
    } catch (error) {
        console.error('Error updating whole blog', error);
        throw error;
    }
}

export const deleteBlog = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/api/blogs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || "Failed to delete post");
        }

        return { message: "Blog deleted successfully" };
    } catch (error) {
        console.error('Error deleting blog', error);
        throw error;
    }
}