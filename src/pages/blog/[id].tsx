import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Blog ID: {id}</h1>
      {/* Your component content */}
    </div>
  );
};
