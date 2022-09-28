import { Bars } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Bars
        height="100"
        width="100"
        color="hsl(209, 23%, 22%)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
