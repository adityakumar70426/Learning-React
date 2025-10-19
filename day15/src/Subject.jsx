import { useContext } from "react";
import Student from "./Student";
import { SubjectContext } from "./ContextData";

export default function Subject() {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: 'red', padding: 10 }}>
      <h1>Subject is {subject}</h1>
    </div>
  );
}
