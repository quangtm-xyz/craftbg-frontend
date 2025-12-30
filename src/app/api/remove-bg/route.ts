import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Gọi API backend với secret key (chỉ server-side biết)
        const response = await fetch(`${process.env.API_URL}/api/remove-background`, {
            method: 'POST',
            headers: {
                'x-api-key': process.env.API_SECRET_KEY!,
            },
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json();
            return NextResponse.json(error, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Remove BG API Error:', error);
        return NextResponse.json(
            { error: 'Failed to remove background' },
            { status: 500 }
        );
    }
}