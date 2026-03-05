
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { data, error } = await supabase.from('portfolio').select('*').limit(1);
        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
        if (data && data.length > 0) {
            return NextResponse.json({
                columns: Object.keys(data[0]),
                sample: data[0]
            });
        }
        return NextResponse.json({ message: 'Table is empty' });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
