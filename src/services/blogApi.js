/**
 * Blog API Service
 * Handles all blog-related API calls
 */

// Use proxy in development (vite.config.js proxies /api to localhost:8000)
// In production, use VITE_APP_API_URL if set, otherwise use relative URLs
const API_BASE_URL = import.meta.env.VITE_APP_API_URL || 
  (import.meta.env.DEV ? "" : "");

/**
 * Get all blogs with optional status filter
 * @param {string} status - Optional: 'published' | 'draft'
 * @returns {Promise<Array>} Array of blogs
 */
export const getAllBlogs = async (status = null) => {
  try {
    const basePath = API_BASE_URL || '';
    const url = status 
      ? `${basePath}/api/blogs?status=${status}`
      : `${basePath}/api/blogs`;
    
    const response = await fetch(url);
    if (!response.ok) {
      // If 404 or other error, return empty array instead of throwing
      if (response.status === 404) {
        console.warn('Blogs endpoint not found. Returning empty array.');
        return [];
      }
      throw new Error(`Failed to fetch blogs: ${response.statusText}`);
    }
    const result = await response.json();
    // Handle different response structures:
    // { success: true, data: [...] } or { blogs: [...] } or [...]
    if (result.success && Array.isArray(result.data)) {
      return result.data;
    } else if (Array.isArray(result.blogs)) {
      return result.blogs;
    } else if (Array.isArray(result)) {
      return result;
    } else if (Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  } catch (error) {
    // Log error but return empty array so page can still render
    console.error('Error fetching blogs:', error);
    // Return empty array instead of throwing to prevent page crash
    return [];
  }
};

/**
 * Get blog by slug
 * @param {string} slug - Blog slug
 * @returns {Promise<Object>} Blog object
 */
export const getBlogBySlug = async (slug) => {
  try {
    const basePath = API_BASE_URL || '';
    const response = await fetch(`${basePath}/api/blogs/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog: ${response.statusText}`);
    }
    const result = await response.json();
    // Handle different response structures:
    // { success: true, data: {...} } or { blog: {...} } or {...}
    if (result.success && result.data) {
      return result.data;
    } else if (result.blog) {
      return result.blog;
    } else if (result.data && !Array.isArray(result.data)) {
      return result.data;
    }
    return result;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null; // Return null instead of throwing
  }
};

/**
 * Get related blogs by blog ID
 * @param {string} id - Blog MongoDB ID
 * @returns {Promise<Array>} Array of related blogs
 */
export const getRelatedBlogs = async (id) => {
  try {
    const basePath = API_BASE_URL || '';
    const response = await fetch(`${basePath}/api/blogs/related/${id}`);
    if (!response.ok) {
      // Return empty array if endpoint fails
      return [];
    }
    const result = await response.json();
    // Handle different response structures
    if (result.success && Array.isArray(result.data)) {
      return result.data;
    } else if (Array.isArray(result.blogs)) {
      return result.blogs;
    } else if (Array.isArray(result)) {
      return result;
    } else if (Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    return []; // Return empty array instead of throwing
  }
};

/**
 * Increment blog views
 * @param {string} id - Blog MongoDB ID
 * @returns {Promise<Object>} Updated blog object
 */
export const incrementBlogViews = async (id) => {
  try {
    const basePath = API_BASE_URL || '';
    const response = await fetch(`${basePath}/api/blogs/${id}/view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      // Silently fail - views tracking is not critical
      return null;
    }
    const data = await response.json();
    return data.blog || data;
  } catch (error) {
    // Silently fail - views tracking is not critical
    console.warn('Error incrementing views:', error);
    return null;
  }
};

/**
 * Like or unlike a blog
 * @param {string} id - Blog MongoDB ID
 * @param {string} action - 'like' | 'unlike'
 * @returns {Promise<Object>} Updated blog object
 */
export const likeBlog = async (id, action = 'like') => {
  try {
    const basePath = API_BASE_URL || '';
    const response = await fetch(`${basePath}/api/blogs/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action }),
    });
    if (!response.ok) {
      throw new Error(`Failed to ${action} blog: ${response.statusText}`);
    }
    const data = await response.json();
    return data.blog || data;
  } catch (error) {
    console.error(`Error ${action}ing blog:`, error);
    throw error; // Re-throw for like action so UI can handle it
  }
};

/**
 * Create a new blog
 * @param {FormData} formData - Form data with blog fields
 * @returns {Promise<Object>} Created blog object
 */
export const createBlog = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs`, {
      method: 'POST',
      body: formData, // multipart/form-data
    });
    if (!response.ok) {
      throw new Error(`Failed to create blog: ${response.statusText}`);
    }
    const data = await response.json();
    return data.blog || data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

/**
 * Update an existing blog
 * @param {string} id - Blog MongoDB ID
 * @param {FormData} formData - Form data with blog fields
 * @returns {Promise<Object>} Updated blog object
 */
export const updateBlog = async (id, formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'PUT',
      body: formData, // multipart/form-data
    });
    if (!response.ok) {
      throw new Error(`Failed to update blog: ${response.statusText}`);
    }
    const data = await response.json();
    return data.blog || data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

/**
 * Delete a blog
 * @param {string} id - Blog MongoDB ID
 * @returns {Promise<Object>} Success response
 */
export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Failed to delete blog: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

/**
 * Update blog status
 * @param {string} id - Blog MongoDB ID
 * @param {string} status - 'published' | 'draft'
 * @returns {Promise<Object>} Updated blog object
 */
export const updateBlogStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error(`Failed to update blog status: ${response.statusText}`);
    }
    const data = await response.json();
    return data.blog || data;
  } catch (error) {
    console.error('Error updating blog status:', error);
    throw error;
  }
};

