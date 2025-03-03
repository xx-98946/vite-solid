import Blur from "$/comps/Blur";
import { For } from "solid-js";
import { Icon, IIconBase } from "./Icon";

export default function Navigate() {
  const linkList: Partial<IIconBase>[] = [
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
    {
      img: "https://www.baidu.com/favicon.ico",
      title: "百度",
      href: "https://www.baidu.com",
    },
  ];
  return (
    <Blur
      src="https://file.moyublog.com/d/file/2024-09-19/c2fe7c9218ccdbd7ee2db326a822e18f.jpg"
      className="w-screen h-screen"
    >
      <div class="flex flex-wrap">
        <For each={linkList}>
          {(item) => {
            return <Icon {...item} className="w-1/8" />;
          }}
        </For>
      </div>
    </Blur>
  );
}
