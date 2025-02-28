import { useParams } from "@solidjs/router";

export default function TestId() {
  const params = useParams<{
    id: string;
  }>();
  return <div>id:{params.id}</div>;
}
