import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Purple Squirrels — AI Engineering & Transformation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08090A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            fontFamily: 'monospace',
            color: '#5F636E',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}
        >
          PURPLE SQUIRRELS
        </div>
        <div
          style={{
            fontSize: '64px',
            fontWeight: 500,
            color: '#E4E5E7',
            lineHeight: 1.1,
            maxWidth: '800px',
            marginBottom: '32px',
          }}
        >
          Build AI-native. Win the next decade.
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#8A8F98',
            maxWidth: '600px',
            lineHeight: 1.5,
          }}
        >
          AI Engineering & Transformation
        </div>
      </div>
    ),
    { ...size }
  );
}
