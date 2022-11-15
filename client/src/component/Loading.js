import loading from "./img/loading.svg";

const Loading = () => {
  return (
    <span className="mx-auto grid w-screen">
      <img
        src={loading}
        alt="loading..."
        className="w-20 mx-auto my-4 drop-shadow-md "
      />
      <p className="m-auto mt-5 font-semibold text-lg text-gray-400 text-center ">
        Loading...
      </p>
      <br/>
    </span>
  );
};

export default Loading;
