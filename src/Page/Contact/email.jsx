import Swal from 'sweetalert2';

const Email = () => {
    const handleEmailSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Email Not Sent!",
            text: "Sorry, we can't send emails at this time",
            icon: "warning",
            confirmButtonText: "Ok"
        });
    };

    return (
        <div>
            <div>
                <p className="text-[16px]">Or Send Me Email</p>
            </div>

            <div className="mt-[20px]">
                <form onSubmit={handleEmailSubmit}>
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

                    <button 
                        type="submit"
                        id="buttonEmail" 
                        className="w-full bg-[#262626] hover:bg-black py-[5px] rounded-[5px] text-white mt-[10px] h-[40px]"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Email;
