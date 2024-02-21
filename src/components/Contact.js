const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form className="flex flex-col mx-auto w-[50%] max-md:w-[70%]">
        <input
          type="text"
          className=" border border-black p-2 m-2 rounded-lg"
          placeholder="Name"
        ></input>
        <textarea
          type="text"
          className="border border-black p-2 m-2 rounded-lg maxlength= "
          placeholder="Write your thoughts here..."
          maxLength={"250"}
        ></textarea>
        <button
          type="submit"
          className="border border-black p-2 m-2 rounded-lg bg-red-500 hover:bg-red-400"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

// rafce
