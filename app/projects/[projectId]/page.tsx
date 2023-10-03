'use client'

const Page = ({ params }: { params: { projectId: string } }) => {
    console.log(params)
    return <p>Project: {params.projectId}</p>
}

export default Page