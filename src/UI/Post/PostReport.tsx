import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import DefaultButton from "../DefaultButton";
import Text from "../Text";
import Textarea from "../Textarea";
import { PostReportWrapp, PostReportTextarea } from "./PostStyles";

export const PostReport = () => {
  const reportTextarea = useInput({ initialValue: "" });

  const handleSubmit = () => {
    if (!reportTextarea.value) {
      reportTextarea && reportTextarea.ref.current.focus();

      return;
    }

    alert("Reported");

    reportTextarea.clearValue();
  };

  useEffect(() => {
    reportTextarea && reportTextarea.ref.current.focus();
  }, []);

  return (
    <PostReportWrapp>
      <Text
        text="Report this post"
        $textColor="#fff"
        $bold
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <PostReportTextarea>
        <Textarea
          ref={reportTextarea.ref}
          value={reportTextarea.value}
          onChange={reportTextarea.onChange}
          placeholder="Your report text"
        />
      </PostReportTextarea>
      <DefaultButton
        $fullWidth
        text="Report"
        $bgColor="#0095f6"
        onClick={handleSubmit}
      />
    </PostReportWrapp>
  );
};
