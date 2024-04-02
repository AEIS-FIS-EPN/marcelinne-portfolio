export function Cover({ children }) {
    return (
    <section className="flex h-64 items-center p-9 justify-self-end rounded-lg bg-[#933931]">
        <div className="flex flex-row gap-4 pt-10">
        <div>
            <img src={"/images/Marcelinne.png"} className="h-44 w-44 rounded-full bg-gray-100 object-cover object-center" alt="Cover Image" />
        </div>
        <div className="flex flex-col justify-center">
            <h2 className="text-xs font-extralight">Profile</h2>
            <h1 className="text-7xl font-bold tracking-tighter">Marcelinne</h1>
            <p className="mt-2 text-xs font-extralight">Software Engineer</p>
        </div>
        </div>
    </section>
    );
}
