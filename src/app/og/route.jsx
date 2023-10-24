import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
        <Image
        alt="detail-image"
        className=" object-fit object-center"
        src="/main_img.png"
        width={1200}
        height={630}
        placeholder={placeholderURL}
        />
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}ß