import { GetServerSidePropsContext } from "next";

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  return { 
    props: {}
  }
}

export default function Homepage() {
  return <h1>Homepage</h1>
}
