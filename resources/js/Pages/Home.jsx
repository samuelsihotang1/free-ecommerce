import { Head } from '@inertiajs/react';

export default function Home({
    auth,
    myMessage = "Hello from Inertia + React!",
}) {
    return (
        <main style={{ padding: 24 }}>
            <Head title="Home" />
            <h1>Home</h1>
            <p>{myMessage}</p>
        </main>
    );
}
