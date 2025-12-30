export async function removeBackground(imageFile: File): Promise<string> {
    const formData = new FormData();
    formData.append('image', imageFile);

    // Gọi API Route của Next.js (không gọi trực tiếp Render)
    const response = await fetch('/api/remove-bg', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to remove background');
    }

    const data = await response.json();
    return data.result; // base64 image
}