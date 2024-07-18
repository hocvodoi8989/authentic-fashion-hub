import { Flex, Spin } from "antd";

const Loading = () => {
  return (
    <div className="left-0 top-20 w-full h-[calc(100vh-80px)] bg-slate-200 absolute flex items-center justify-center z-10 opacity-70">
      <Flex align="center" gap="middle">
        <Spin />
      </Flex>
    </div>
  );
};

export default Loading;
