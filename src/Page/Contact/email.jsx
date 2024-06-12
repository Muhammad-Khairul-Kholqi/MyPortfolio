const Email = () => {
    return (
        <div>
            <div>
                <p className="font-medium text-[20px]">Or Send Me Email</p>
            </div>

            <div className="mt-[20px]">
                <form>
                    <div className="flex justify-center gap-[10px]">
                        <input 
                            className="w-full border h-[40px] px-[10px] rounded-[5px]"
                            type="text" 
                            placeholder="Name*"
                        />

                        <input 
                            className="w-full border h-[40px] px-[10px] rounded-[5px]"
                            type="text" 
                            placeholder="Subject*"
                        />
                    </div>
                    <textarea 
                        className="w-full border mt-[20px] px-[10px] rounded-[5px] pt-[7px]" 
                        placeholder="Message*"
                        style={{ height: '150px' }}
                    />

                    <button className="w-full bg-[#262626] hover:bg-black py-[5px] rounded-[5px] text-white mt-[10px] h-[40px]">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default Email;
