import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";

type LayoutProps = {
  children: ReactElement | ReactNode;
};

const WrapperLayout = styled.div``;

const LayoutMain = styled.main``;

const Layout = (props: LayoutProps) => {
  return (
    <WrapperLayout>
      <Head>
        <title>Youtube Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LayoutMain>{props.children}</LayoutMain>
    </WrapperLayout>
  );
};

export default Layout;
