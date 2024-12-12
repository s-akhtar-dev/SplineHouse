import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Spline
        scene="https://prod.spline.design/yAoeJvlqiVGeI6bW/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
