function Post(props) {
    return <div className="flex justify-center">
        <div className="border-2 mt-4 border-black p-3">
            <img className="sm:w-[30em] w-[20em]" src={props.image} />
            <h1 className="sm:text-3xl text-xl font-bold">{props.title}</h1>
        </div>
    </div>
}

export default Post