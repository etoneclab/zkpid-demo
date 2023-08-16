/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
const id = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Blog ID: {id}</h1>
      {/* Your component content */}
    </div>
  );
};
export default id;
