import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/Intro/Intro'))

export default function Home() {
  return (
    <main className="flex min-h-screen bg-purple-200 flex-col items-center justify-between p-24">
      <div>
        <p>Test 3d</p>
          <DynamicHeader></DynamicHeader>
      </div>
    </main>
  )
}
